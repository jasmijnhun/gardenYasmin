// Function to show the tasks for a specific week
function showWeekTasks(week) {
  // Hide all tasks initially
  let allTasks = document.querySelectorAll('.week-task');
  allTasks.forEach(task => task.style.display = 'none');
  
  // Show the tasks for the selected week
  let weekTask = document.getElementById('week' + week + '-task');
  if (weekTask) {
    weekTask.style.display = 'block';
  }
}

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

 // Load saved task states and finished dates from localStorage
 document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.task').forEach(function(task) {
    const taskId = task.id;
    const finishedDate = localStorage.getItem(taskId + '_date');
    const taskState = localStorage.getItem(taskId + '_state') === 'completed';

    // Set the task state (completed or not)
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (taskState && finishedDate) {
      task.classList.add('completed'); // Add the strikethrough effect
      checkbox.checked = true; // Check the checkbox
      task.querySelector('.finished-date').value = finishedDate;
      task.querySelector('.finished-date').style.display = 'inline-block'; // Show date input
    }

    // Hide the finished date field if the task is not completed
    if (!taskState) {
      task.querySelector('.finished-date').style.display = 'none';
    }
  });
});

// Toggle task completion (strikethrough) when clicked on the label
document.querySelectorAll('.task-label').forEach(function(label) {
  label.addEventListener('click', function() {
    const task = this.closest('.task');
    const checkbox = task.querySelector('input[type="checkbox"]');
    const finishedDateInput = task.querySelector('.finished-date');

    // Toggle the completion state (strikethrough)
    checkbox.checked = !checkbox.checked; // Toggle checkbox state

    if (checkbox.checked) {
      task.classList.add('completed'); // Add strikethrough
      finishedDateInput.style.display = 'inline-block'; // Show the finished date input
      const finishedDate = finishedDateInput.value;
      if (finishedDate) {
        localStorage.setItem(task.id + '_date', finishedDate); // Save finished date
      }
      localStorage.setItem(task.id + '_state', 'completed'); // Save state as completed
    } else {
      task.classList.remove('completed'); // Remove strikethrough
      finishedDateInput.style.display = 'none'; // Hide the finished date input
      finishedDateInput.value = ''; // Clear the finished date
      localStorage.removeItem(task.id + '_date'); // Remove finished date from localStorage
      localStorage.setItem(task.id + '_state', 'not_completed'); // Save state as not completed
    }
  });
});

// Save the finished date when the date picker changes
document.querySelectorAll('.finished-date').forEach(function(dateInput) {
  dateInput.addEventListener('change', function() {
    const taskId = this.id;
    const finishedDate = this.value;
    if (finishedDate) {
      localStorage.setItem(taskId, finishedDate); // Save the finished date
    }
  });
});