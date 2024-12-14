
// Function to show the selected month and hide others
function showMonth(month) {
  // Hide all months
  let allMonths = document.querySelectorAll('.month');
  allMonths.forEach(m => m.style.display = 'none');
  
  // Show the selected month
  let selectedMonth = document.getElementById(month);
  if (selectedMonth) {
    selectedMonth.style.display = 'block';
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const tasks = [
    //Week 1
    { date: '2025-01-01', description: 'Start Broccoli Binnen', completed:false },
    { date: '2025-01-01', description: 'Start Paprika Binnen', completed:false},
    { date: '2025-01-01', description: 'Start Pepers Binnen', completed:false},
    { date: '2025-01-01', description: 'Start Zomerprei Binnen', completed:false},
    { date: '2025-01-01', description: 'Start Tomaten Binnen', completed:false},
    { date: '2025-01-01', description: 'Start Uienzaden Binnen', completed:false},
    //Week 3
    { date: '2025-01-13', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-01-13', description: 'Start Zomerprei Binnen', completed:false},

    // Week 5
    { date: '2025-01-27', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Paprika Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Pepers Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Herfstprei Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Tomaten Binnen', completed:false},
    { date: '2025-01-27', description: ' Start Uienzaden Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Bloemkool Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Boerenkool Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Chinese Kool Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Luffa Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Raddichio Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Rode Kool Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Kropsla Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Spinazie Binnen', completed:false},
    { date: '2025-01-27', description: 'Start Spruitjes Binnen', completed:false},

    //week 6
    { date: '2025-02-03', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-02-03', description: 'Start Spinazie Binnen', completed:false},

    //week 7
    { date: '2025-02-10', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-02-10', description: 'Start Herfstprei Binnen', completed:false},
    { date: '2025-02-10', description: 'Start Bloemkool Binnen', completed:false},
    { date: '2025-02-10', description: ' Start Chinese Kool Binnen', completed:false},
    { date: '2025-02-10', description: 'Start Radicchio Binnen', completed:false},
    { date: '2025-02-10', description: 'Start Rode Kool Binnen', completed:false},
    { date: '2025-02-10', description: 'Start Kropsla Binnen', completed:false},
    { date: '2025-02-10', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-02-10', description: 'Start Spinazie Binnen', completed:false},
    { date: '2025-02-10', description: 'Start Spruitjes Binnen', completed:false},

    //week 8
    { date: '2025-02-17', description: 'Start Boerenkool Binnen', completed:false},
    { date: '2025-02-17', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-02-17', description: 'Start Spinazie Binnen', completed:false},

    //week 9
    
  ];

  const weekRows = document.querySelectorAll('.calendar tr[data-week-number]');
  const taskDetailsList = document.getElementById('task-details-list');
  const selectedWeekNumberElement = document.getElementById('selected-week-number');

  // Helper function to calculate week number
  function getWeekNumber(dateString) {
    const date = new Date(dateString);
    
    // Get the first day of the year
    const firstDayOfYear = new Date(date.getUTCFullYear(), 0, 1);
    
    // Calculate the day number (0-6, where 0 = Monday, 6 = Sunday)
    const dayOfYear = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    
    // Calculate the week number based on the day of the year
    const weekNumber = Math.ceil((dayOfYear + 1) / 7);
    
    // Adjust for first week of the year (should start from 1)
    return weekNumber === 0 ? 1 : weekNumber;
}




  // Group tasks by week
  function groupTasksByWeek(tasks) {
    const taskWeekMap = {};
    tasks.forEach(task => {
      const weekNumber = getWeekNumber(task.date);
      if (!taskWeekMap[weekNumber]) {
        taskWeekMap[weekNumber] = [];
      }
      taskWeekMap[weekNumber].push(task);
    });
    return taskWeekMap;
  }
  
  

  const tasksByWeek = groupTasksByWeek(tasks);

  // Load tasks from localStorage (if available)
  function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasksByWeek');
    if (storedTasks) {
      const storedTasksByWeek = JSON.parse(storedTasks);
      Object.keys(storedTasksByWeek).forEach(week => {
        tasksByWeek[week] = storedTasksByWeek[week].map(task => ({
          ...task,
          completed: !!task.completed // Ensure completed is boolean
        }));
      });
    }
  }

  // Save tasks to localStorage
  function saveTasksToLocalStorage() {
    localStorage.setItem('tasksByWeek', JSON.stringify(tasksByWeek));
  }

  // Display tasks for the selected week
  function showTasksForWeek(weekNumber) {
    taskDetailsList.innerHTML = ''; // Clear previous tasks
    selectedWeekNumberElement.textContent = `Week ${weekNumber}`; // Update displayed week number
    
    const tasksForSelectedWeek = tasksByWeek[weekNumber] || [];

    console.log('Tasks for week', weekNumber, tasksForSelectedWeek); // Debugging line to check which tasks are being displayed

    if (tasksForSelectedWeek.length > 0) {
        tasksForSelectedWeek.forEach((task, index) => {
            const taskElement = document.createElement('li');
            taskElement.textContent = task.description;

            // Apply strikethrough for completed tasks
            if (task.completed) {
                taskElement.style.textDecoration = 'line-through';
            }

            // Toggle completion when task is clicked
            taskElement.addEventListener('click', () => toggleTaskCompletion(weekNumber, index, taskElement));

            taskDetailsList.appendChild(taskElement);
        });
    } else {
        taskDetailsList.innerHTML = '<li>No tasks for this week</li>';
    }
}


  // Toggle task completion
  function toggleTaskCompletion(weekNumber, taskIndex, taskElement) {
    const task = tasksByWeek[weekNumber][taskIndex];
    task.completed = !task.completed; // Toggle completion status

    // Update the task's appearance based on its state
    if (task.completed) {
      taskElement.style.textDecoration = 'line-through'; // Add strikethrough
    } else {
      taskElement.style.textDecoration = 'none'; // Remove strikethrough
    }

    // Save updated tasks to localStorage
    saveTasksToLocalStorage();
  }

  // Add event listeners to calendar rows
  weekRows.forEach(row => {
    row.addEventListener('click', () => {
      const weekNumber = row.getAttribute('data-week-number');
      showTasksForWeek(weekNumber);
    });
  });

  // Initialize tasks
  loadTasksFromLocalStorage();
});