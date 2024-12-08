// Define tasks for specific dates
const tasks = {
    'january': {
      '1': 'Cleaning the garden',
      '2': 'Cleaning the garden',
      '3': 'Cleaning the garden',
      '4': 'Cleaning the garden',
      '5': 'Cleaning the garden',
      '6': 'Cleaning the garden',
      '7': 'Cleaning the garden',
    },
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
        cell.innerHTML = `<div class="date">${date}</div><div class="task">${taskData[date]}</div>`;
        cell.classList.add('task-day'); // Optional: Style task cells differently
      }
    });
  }

  function showMonth(month) {
    // Hide all months
    document.querySelectorAll('.month').forEach((el) => {
      el.style.display = 'none';
    });

    // Show selected month
    const selectedMonth = document.getElementById(month);
    if (selectedMonth) {
      selectedMonth.style.display = 'block';
      addTasksToCalendar(month);
    }
  }

  // Initialize January by default
  document.addEventListener('DOMContentLoaded', () => {
    showMonth('january');
  });