
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

  // Function to load saved task states
  function loadTaskStates() {
    document.querySelectorAll('.task').forEach(function(task) {
      const taskId = task.id;
      const taskState = localStorage.getItem(taskId + '_state') === 'completed';

      // Set the task state (completed or not)
      const checkbox = task.querySelector('input[type="checkbox"]');
      const taskLabel = task.querySelector('.task-label');

      // If the task is marked as completed
      if (taskState) {
        task.classList.add('completed'); // Add the strikethrough effect
        checkbox.checked = true; // Check the checkbox
        taskLabel.classList.add('completed'); // Apply strikethrough on the label
      } else {
        task.classList.remove('completed'); // Remove the strikethrough effect
        taskLabel.classList.remove('completed'); // Remove the strikethrough on the label
      }
    });
  }

  // Toggle task completion (strikethrough) when clicked on the label
  document.querySelectorAll('.task').forEach(function(task) {
    const checkbox = task.querySelector('input[type="checkbox"]');
    const taskLabel = task.querySelector('.task-label');

    checkbox.addEventListener('change', function() {
      const isChecked = checkbox.checked;

      if (isChecked) {
        task.classList.add('completed'); // Add strikethrough on task container
        taskLabel.classList.add('completed'); // Add strikethrough on label
        localStorage.setItem(task.id + '_state', 'completed'); // Save state as completed
      } else {
        task.classList.remove('completed'); // Remove strikethrough from task container
        taskLabel.classList.remove('completed'); // Remove strikethrough from label
        localStorage.setItem(task.id + '_state', 'not_completed'); // Save state as not completed
      }
    });
  });

  // Load task states when the page is loaded
  window.onload = loadTaskStates;