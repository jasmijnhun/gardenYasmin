
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
    { date: '2025-01-03', description: 'Submit project proposal', completed:false },
    { date: '2025-01-07', description: 'Team meeting for Q1 planning' },
    { date: '2025-01-10', description: 'Follow up with clients' },
    { date: '2025-02-15', description: 'Tax preparation for Q1' },
    { date: '2025-12-21', description: 'Prepare year-end report' },
    { date: '2025-12-24', description: 'Christmas celebration with family' },
  ];

  const weekRows = document.querySelectorAll('.calendar tr[data-week-number]');
  const taskDetailsList = document.getElementById('task-details-list');
  const selectedWeekNumberElement = document.getElementById('selected-week-number');

  // Helper function to calculate week number for 2025
  function getWeekNumber(dateString) {
    const date = new Date(dateString);
    const target = new Date(date.valueOf());
    const dayNumber = (date.getUTCDay() + 6) % 7; // Adjust so Monday = 0, Sunday = 6
    target.setUTCDate(target.getUTCDate() - dayNumber + 3); // Nearest Thursday
    const firstThursday = new Date(target.getUTCFullYear(), 0, 4); // First Thursday of the year
    const weekNumber = Math.ceil(((target - firstThursday) / 86400000 + 1) / 7);
    return weekNumber;
  }

  // Group tasks by week
  function groupTasksByWeek(tasks) {
    const taskWeekMap = {};
    tasks.forEach(task => {
      const weekNumber = getWeekNumber(task.date);
      console.log('Date:', task.date, 'Week Number:', weekNumber); // Debugging
      if (!taskWeekMap[weekNumber]) {
        taskWeekMap[weekNumber] = [];
      }
      taskWeekMap[weekNumber].push(task);
    });
    console.log('Grouped Tasks by Week:', taskWeekMap); // Debugging
    return taskWeekMap;
  }

  const tasksByWeek = groupTasksByWeek(tasks);

  // Display tasks for the selected week
  function showTasksForWeek(weekNumber) {
    taskDetailsList.innerHTML = '';
    selectedWeekNumberElement.textContent = `week ${weekNumber}`;
    const tasksForSelectedWeek = tasksByWeek[weekNumber] || [];
  
    if (tasksForSelectedWeek.length > 0) {
      tasksForSelectedWeek.forEach((task, index) => {
        const taskElement = document.createElement('li');
  
        // Apply strikethrough for completed tasks
        taskElement.textContent = task.description;
        if (task.completed) {
          taskElement.style.textDecoration = 'line-through';
        }
  
        // Add a click event to toggle task completion
        taskElement.addEventListener('click', () => toggleTaskCompletion(weekNumber, index, taskElement));
  
        taskDetailsList.appendChild(taskElement);
      });
    } else {
      taskDetailsList.innerHTML = '<li>Geen taken voor deze week</li>';
    }
  }
  
  function toggleTaskCompletion(weekNumber, taskIndex, taskElement) {
    const task = tasksByWeek[weekNumber][taskIndex];
    task.completed = !task.completed; // Toggle completion status
  
    // Apply or remove strikethrough
    taskElement.style.textDecoration = task.completed ? 'line-through' : 'none';
  
    // Save updated tasks to local storage
    saveTasksToLocalStorage();
  }

  function saveTasksToLocalStorage() {
    localStorage.setItem('tasksByWeek', JSON.stringify(tasksByWeek));
  }

  function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasksByWeek');
    if (storedTasks) {
      Object.assign(tasksByWeek, JSON.parse(storedTasks));
    }
  }
  
  // Call this function on page load
  loadTasksFromLocalStorage();

  function toggleTaskCompletion(weekNumber, taskIndex, taskElement) {
    const task = tasksByWeek[weekNumber][taskIndex];
    task.completed = !task.completed;
  
    // Toggle class for completed tasks
    taskElement.classList.toggle('completed-task', task.completed);
  
    // Save to local storage
    saveTasksToLocalStorage();
  }
  



  // Add event listeners to calendar rows
  weekRows.forEach(row => {
    row.addEventListener('click', () => {
      const weekNumber = row.getAttribute('data-week-number');
      showTasksForWeek(weekNumber);
    });
  });
});