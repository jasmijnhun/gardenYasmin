
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
    { date: '2025-02-24', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Paprika Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Pepers Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Winterprei Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Tomaten Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Uienzaden Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Bloemkool Binnen', completed:false},
    { date: '2025-02-24', description: 'STart Chinese Kool Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Luffa Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Radicchio Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Rode Kool Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Kropsla Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Spinazie Binnen', completed:false},
    { date: '2025-02-24', description: 'Start Spruitjes Binnen', completed:false},
    //week 10 
    { date: '2025-03-03', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-03-03', description: 'Start Spinazie Binnen', completed:false},
    { date: '2025-03-03', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-03-03', description: 'Start Courgette Binnen', completed:false},
    { date: '2025-03-03', description: 'Start Honingmeloen Binnen', completed:false},
    { date: '2025-03-03', description: 'Start Komkommer Binnen', completed:false},
    { date: '2025-03-03', description: 'Start Maïs Binnen', completed:false},
    { date: '2025-03-03', description: 'Start Meloenen Binnen', completed:false},
//week 11
    { date: '2025-03-10', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Winterprei Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Bloemkool Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Boerenkool Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Chinese Kool Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Radicchio Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Rode Kool Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Kropsla Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Spinazie Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Spruitjes Binnen', completed:false},
    { date: '2025-03-10', description: 'Start Bieten Binnen', completed:false},
//week 12
    { date: '2025-03-17', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-03-17', description: 'Start Spinazie Binnen', completed:false},
    { date: '2025-03-17', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-03-17', description: 'Start Maïs Binnen', completed:false},
//week 13
    { date: '2025-03-24', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Paprika Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Pepers Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Tomaten Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Uienzaden Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Bloemkool Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Chinese Kool Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Luffa Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Radicchio Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Rode Kool Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Kropsla Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Spinazie Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Spruitjes Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Bieten Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Honingmeloen Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Komkommer Binnen', completed:false},
    { date: '2025-03-24', description: 'Start Meloenen Binnen', completed:false},
//week 14
    { date: '2025-03-31', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-03-31', description: 'Start Maïs Binnen', completed:false},
//week 15
    { date: '2025-04-07', description: 'Start Chinese Kool Binnen', completed:false},
    { date: '2025-04-07', description: 'Start Rode Kool Binnen', completed:false},
    { date: '2025-04-07', description: 'Start Augurken Binnen', completed:false},
    { date: '2025-04-07', description: 'Start Bieten Binnen', completed:false},
    { date: '2025-04-07', description: 'Start Cantaloupe Binnen', completed:false},
    { date: '2025-04-07', description: 'Start Pompoen Binnen', completed:false},
    { date: '2025-04-07', description: 'Start Watermeloen Binnen', completed:false},
//week 16
    { date: '2025-04-14', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-04-14', description: 'Start Courgette Binnen', completed:false},
    { date: '2025-04-14', description: 'Start Honingmeloen Binnen', completed:false},
    { date: '2025-04-14', description: 'Start Komkommer Binnen', completed:false},
    { date: '2025-04-14', description: 'Start Maïs Binnen', completed:false},
    { date: '2025-04-14', description: 'Start Meloenen Binnen', completed:false},
//week 17
    { date: '2025-04-21', description: 'Start Uienzaden Binnen', completed:false},
    { date: '2025-04-21', description: 'Start Chinese Kool Binnen', completed:false},
    { date: '2025-04-21', description: 'Start Luffa Binnen', completed:false},
    { date: '2025-04-21', description: 'Start Rode Kool Binnen', completed:false},
    { date: '2025-04-21', description: 'Start Bieten Binnen', completed:false},
//week 18
    { date: '2025-04-28', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-04-28', description: 'Start Augurk Binnen', completed:false},
    { date: '2025-04-28', description: 'Start Cantaloupe Binnen', completed:false},
    { date: '2025-04-28', description: 'Start Maïs Binnen', completed:false},
    { date: '2025-04-28', description: 'Start Watermeloen Binnen', completed:false},
//week 19
    { date: '2025-05-05', description: 'Start Bieten Binnen', completed:false},
    { date: '2025-05-05', description: 'Start Komkommer Binnen', completed:false},
    { date: '2025-05-05', description: 'Start Meloenen Binnen', completed:false},
    { date: '2025-05-05', description: 'Start Pompoen Binnen', completed:false},
//week 20
    { date: '2025-05-12', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-05-12', description: 'Start Maïs Binnen', completed:false},
//week 21
    { date: '2025-05-19', description: 'Start Augurk Binnen', completed:false},
    { date: '2025-05-19', description: 'Start Bieten Binnen', completed:false},
    { date: '2025-05-19', description: 'Start Cantaloupe Binnen', completed:false},
    { date: '2025-05-19', description: 'Start Watermeloen Binnen', completed:false},
//week 22
    { date: '2025-05-26', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-05-26', description: 'Start Courgette Binnen', completed:false},
    { date: '2025-05-26', description: 'Start Komkommer Binnen', completed:false},
    { date: '2025-05-26', description: 'Start Maïs Binnen', completed:false},
    { date: '2025-05-26', description: 'Start Meloenen Binnen', completed:false},
//week 23
    { date: '2025-06-02', description: 'Start Bieten Binnen', completed:false},
    { date: '2025-06-02', description: 'Start Pompoen Binnen', completed:false},
    //week 24
    { date: '2025-06-09', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-06-09', description: 'Start Maïs Binnen', completed:false},
    //week 25
    { date: '2025-06-16', description: 'Start Bieten Binnen', completed:false},
    { date: '2025-06-16', description: 'Start Komkommer Binnen', completed:false},
    { date: '2025-06-16', description: 'Start Meloenen Binnen', completed:false},
//week 26
    { date: '2025-06-23', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-06-23', description: 'Start Maïs Binnen', completed:false},
//week 27
    { date: '2025-06-30', description: 'Start Bieten Binnen', completed:false},
//week 28
    { date: '2025-07-07', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-07-07', description: 'Start Boerenkool Binnen', completed:false},
    { date: '2025-07-07', description: 'Start Radicchio Binnen', completed:false},
    { date: '2025-07-07', description: 'Start Kropsla Binnen', completed:false},
    { date: '2025-07-07', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-07-07', description: 'Start Spruitjes Binnen', completed:false},
    { date: '2025-07-07', description: 'Start Amsoi Binnen', completed:false},
    { date: '2025-07-07', description: 'Start Courgette Binnen', completed:false},
    { date: '2025-07-07', description: 'Start Meloenen Binnen', completed:false},
//week 29
    { date: '2025-07-14', description: 'Start Pluksla Binnen', completed:false},
//week 30
    { date: '2025-07-21', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-07-21', description: 'Start Radicchio Binnen', completed:false},
    { date: '2025-07-21', description: 'Start Kropsla Binnen', completed:false},
    { date: '2025-07-21', description: 'STart Pluksla Binnen', completed:false},
    { date: '2025-07-21', description: 'Start Spruitjes Binnen', completed:false},
    { date: '2025-07-21', description: 'Start Amsoi Binnen', completed:false},
// week 31
    { date: '2025-07-28', description: 'Start Boerenkool Binnen', completed:false},
    { date: '2025-07-28', description: 'Start Pluksla Binnen', completed:false},
//week 32
    { date: '2025-08-04', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-08-04', description: 'Start Bloemkool Binnen', completed:false},
    { date: '2025-08-04', description: 'Start Radicchio Binnen', completed:false},
    { date: '2025-08-04', description: 'Start Kropsla Binnen', completed:false},
    { date: '2025-08-04', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-08-04', description: 'Start Spinazie Binnen', completed:false},
    { date: '2025-08-04', description: 'Start Spruitjes Binnen', completed:false},
    { date: '2025-08-04', description: 'Start Amsoi Binnen', completed:false},
//week 33
    { date: '2025-08-11', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-08-11', description: 'Start Spinazie Binnen', completed:false},
//week 34
    { date: '2025-08-18', description: 'Start Broccoli Binnen', completed:false},
    { date: '2025-08-18', description: 'Start Bloemkool Binnen', completed:false},
    { date: '2025-08-18', description: 'Start Boerenkool Binnen', completed:false},
    { date: '2025-08-18', description: 'Start Radicchio Binnen', completed:false},
    { date: '2025-08-18', description: 'Start Kropsla Binnen', completed:false},
    { date: '2025-08-18', description: 'Start Pluksla Binnen', completed:false},
    { date: '2025-08-18', description: 'Start Spinazie Binnen', completed:false},
    { date: '2025-08-18', description: 'Start Spruitjes Binnen', completed:false},
    { date: '2025-08-18', description: 'Start Amsoi Binnen', completed:false},
//week 35
    { date: '2025-08-18', description: '', completed:false},
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

  

  function updateWeekRowColor(weekNumber) {
    const weekRow = document.querySelector(`tr[data-week-number='${weekNumber}']`);
    const tasksForSelectedWeek = tasksByWeek[weekNumber] || [];
  
    if (weekRow) {
      const allTasksCompleted = tasksForSelectedWeek.length > 0 && tasksForSelectedWeek.every(task => task.completed);
      if (allTasksCompleted) {
        weekRow.classList.add('week-completed');
    } else {
        weekRow.classList.remove('week-completed');
    }
    }
  }


  // Display tasks for the selected week
  function showTasksForWeek(weekNumber) {
    taskDetailsList.innerHTML = '';
    selectedWeekNumberElement.textContent = `week ${weekNumber}`;
    
    const tasksForSelectedWeek = tasksByWeek[weekNumber] || [];
    const weekRow = document.querySelector(`tr[data-week-number='${weekNumber}']`);
  
    // Debugging: Check if the week row exists
    console.log(`Week Row for week ${weekNumber}:`, weekRow);
  
    // Populate task details
    if (tasksForSelectedWeek.length > 0) {
      tasksForSelectedWeek.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.description;
  
        // Apply strikethrough for completed tasks
        if (task.completed) {
          taskElement.style.textDecoration = 'line-through';
        }
  
        // Add a click event to toggle task completion
        taskElement.addEventListener('click', () => {
          toggleTaskCompletion(weekNumber, index, taskElement);
        });
  
        taskDetailsList.appendChild(taskElement);
      });
    } else {
      taskDetailsList.innerHTML = '<li>Geen taken voor deze week</li>';
    }
  
    // Check and update the background color for this week row
    updateWeekRowColor(weekNumber);
  }
  

  
  



  function toggleTaskCompletion(weekNumber, taskIndex, taskElement) {
    const task = tasksByWeek[weekNumber][taskIndex];
    task.completed = !task.completed; // Toggle completion status
    
    // Update the task's appearance based on its state
    if (task.completed) {
      taskElement.style.textDecoration = 'line-through';
    } else {
      taskElement.style.textDecoration = 'none';
    }
  
    // Update the week's row color
    updateWeekRowColor(weekNumber);
  
    // Save updated tasks to local storage
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