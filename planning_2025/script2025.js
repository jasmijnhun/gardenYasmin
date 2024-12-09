// Define tasks for specific dates with support for multiple tasks
const tasks = {
  'january': {
    '1': [{ task: 'Cleaning the garden', color: 'green' }],
    '2': [{ task: 'Buy groceries', color: 'blue' }],
    '3': [
      { task: 'Morning Jog', color: 'red' },
      { task: 'Team Meeting', color: 'orange' },
      { task: 'Dinner with friends', color: 'purple' }
    ],
    '4': [{ task: 'Cleaning the garden', color: 'green' }],
    '5': [{ task: 'Workout', color: 'red' }],
    '6': [{ task: 'Cleaning the garden', color: 'green' }],
    '7': [{ task: 'Visit family', color: 'purple' }]
  },
  'february': {
    '26': [{ task: 'Cleaning the garden', color: 'green' }]
  }
  // Add tasks for other months here, if needed
};

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

addTasksToCalendar('january');
addTasksToCalendar('february');
