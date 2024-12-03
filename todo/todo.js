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

  


  document.addEventListener('DOMContentLoaded', () => {
    // Function to calculate and update progress
    const updateProgress = (taskList) => {
      const tasks = taskList.querySelectorAll('.task-checkbox');
      const completedTasks = Array.from(tasks).filter(task => task.checked).length;
      const progressPercentage = (completedTasks / tasks.length) * 100;
  
      // Update the progress bar width
      const progressBar = taskList.nextElementSibling.querySelector('.progress');
      progressBar.style.width = `${progressPercentage}%`;
  
      // Dynamically change the progress bar color based on progress
      if (progressPercentage === 0) {
        progressBar.style.backgroundColor = 'red';
      } else if (progressPercentage < 50) {
        progressBar.style.backgroundColor = 'orange';
      } else if (progressPercentage < 80) {
        progressBar.style.backgroundColor = 'yellow';
      } else {
        progressBar.style.backgroundColor = 'green';
      }
    };
  
    // Attach event listeners to all task lists
    document.querySelectorAll('.task-list').forEach(taskList => {
      const month = taskList.parentElement.id;
  
      // Restore progress from localStorage
      const savedTasks = JSON.parse(localStorage.getItem(month)) || [];
      taskList.querySelectorAll('.task-checkbox').forEach((checkbox, index) => {
        checkbox.checked = savedTasks[index] || false;
      });
  
      // Update the progress bar on page load
      updateProgress(taskList);
  
      // Update progress and save state when tasks are checked/unchecked
      taskList.addEventListener('change', () => {
        const taskStates = Array.from(taskList.querySelectorAll('.task-checkbox')).map(
          checkbox => checkbox.checked
        );
        localStorage.setItem(month, JSON.stringify(taskStates));
        updateProgress(taskList);
      });
    });
  });
  