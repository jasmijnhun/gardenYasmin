// Define tasks for specific dates with support for multiple tasks
const tasks = {
  'january': {
    '1': [{ task: 'Start Broccoli', color: 'green' },
      { task: 'Start Paprika', color: 'red'},
      { task: 'Start Peper', color: 'blue'},
      { task: 'Start Zomerprei', color:'darkgreen'},
      { task: 'Start Tomaten', color:"darkred"},
      { task: 'Start Uienzaden', color: "purple"}
    ]


  // Add tasks for other months here, if needed
}}

function addTasksToCalendar(month) {
  const calendar = document.getElementById(month);
  if (!calendar || !tasks[month]) return;

  const taskData = tasks[month];
  const cells = calendar.querySelectorAll('td');

  cells.forEach((cell) => {
    const date = cell.textContent.trim();
    if (taskData[date]) {
      const tasksForDate = taskData[date];
      let taskHTML = tasksForDate.map(taskObj =>
        `<div class="task" style="color: ${taskObj.color};">${taskObj.task}</div>`
      ).join('');

      cell.innerHTML = `
        <div class="date">${date}</div>
        ${taskHTML}`;
      cell.classList.add('task-day'); // Optional: Style task cells differently
    }
  });
}

function showMonth(monthId) {
  // Hide all months
  const months = document.querySelectorAll('.month');
  months.forEach((month) => {
    month.style.display = 'none';
  });

  // Show the selected month
  const selectedMonth = document.getElementById(monthId);
  if (selectedMonth) {
    selectedMonth.style.display = 'block';
  }};