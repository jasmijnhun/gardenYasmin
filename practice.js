function toggleLifecycle() {
    const lifecycleContainer = document.getElementById('tomato-lifecycle');
    
    // Toggle visibility of the lifecycle container
    if (lifecycleContainer.style.display === 'none' || lifecycleContainer.style.display === '') {
      lifecycleContainer.style.display = 'block';  // Show the container
    } else {
      lifecycleContainer.style.display = 'none';  // Hide the container
    }
  }
  