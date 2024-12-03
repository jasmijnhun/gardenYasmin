document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  
      // Remove active class from all content
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
      // Add active class to clicked tab
      this.classList.add('active');
  
      // Show the corresponding content
      const month = this.getAttribute('data-month');
      document.getElementById(month).classList.add('active');
    });
  });
  
  // Set January as the default active tab
  document.querySelector('.tab[data-month="january"]').classList.add('active');
  document.getElementById('january').classList.add('active');

  




  document.addEventListener('DOMContentLoaded', () => {
    const taskLists = document.querySelectorAll('.task-list');
  
    taskLists.forEach(taskList => {
      // Restore checked tasks from localStorage
      const month = taskList.parentElement.id;
      const savedTasks = JSON.parse(localStorage.getItem(month)) || [];
      taskList.querySelectorAll('.task-checkbox').forEach((checkbox, index) => {
        checkbox.checked = savedTasks[index] || false;
      });
  
      // Listen for task changes
      taskList.addEventListener('change', () => {
        const taskStates = Array.from(taskList.querySelectorAll('.task-checkbox')).map(
          checkbox => checkbox.checked
        );
        localStorage.setItem(month, JSON.stringify(taskStates));
      });
    });
  });
  