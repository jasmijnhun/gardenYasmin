// Function to toggle the visibility of care details
function toggleDetails(detailId) {
    const details = document.getElementById(detailId);
    
    // If details are already visible, hide them
    if (details.classList.contains('active')) {
      details.classList.remove('active');
    } else {
      // Otherwise, show the details
      details.classList.add('active');
    }
  }
  