function showVegetableInfo(vegetable) {
    // Show the care info container
    document.getElementById('care-info-container').style.display = 'block';
  
    // Hide all vegetable care guides
    const careGuides = document.querySelectorAll('.care-info');
    careGuides.forEach(guide => {
      guide.classList.remove('active');
    });
  
    // Show the selected vegetable's care guide
    const selectedGuide = document.getElementById(vegetable + '-info');
    selectedGuide.classList.add('active');
  }
  