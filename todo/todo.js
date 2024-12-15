// Function to show the clicked tab and hide others
function showTab(tabName) {
  // Get all tab contents and hide them
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(function (content) {
      content.classList.remove('active'); // Remove active class from all tabs
  });

  // Get all tab buttons and remove the active class
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(function (button) {
      button.classList.remove('active'); // Remove active state from buttons
  });

  // Hide default content
  const defaultContent = document.getElementById('default-content');
  if (defaultContent) {
      defaultContent.classList.add('hidden'); // Add hidden class
  }

  // Show the content for the clicked tab
  const activeTab = document.getElementById(tabName + '-tab');
  if (activeTab) {
      activeTab.classList.add('active'); // Show the active tab
  }

  // Add the active class to the clicked tab button
  const activeButton = document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`);
  if (activeButton) {
      activeButton.classList.add('active');
  }
}

// On page load, show the default content
document.addEventListener('DOMContentLoaded', function () {
  const defaultContent = document.getElementById('default-content');
  if (defaultContent) {
      defaultContent.classList.remove('hidden'); // Ensure default content is visible initially
  }
});




//JOURNAL PARTS
// Function to filter blog posts by month and year
function filterPosts(month, year) {
  const posts = document.querySelectorAll('.blog-post'); // All blog posts
  const monthItems = document.querySelectorAll('.month-selector li'); // All month items

  // Reset active state
  monthItems.forEach((item) => item.classList.remove('active'));

  // Set active state for clicked month/year
  const activeItem = [...monthItems].find(
    (item) =>
      item.textContent === month ||
      (month === 'All' && item.textContent === 'All')
  );
  if (activeItem) activeItem.classList.add('active');

  // Show/hide posts based on month and year
  posts.forEach((post) => {
    const postMonth = post.getAttribute('data-month');
    const postYear = post.getAttribute('data-year');

    if (
      (month === 'All' || postMonth === month) &&
      (year === 'All' || postYear === year)
    ) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}

// Toggle visibility of months under each year
function toggleYear(yearHeader) {
  const monthList = yearHeader.nextElementSibling;
  if (monthList.style.display === 'none' || !monthList.style.display) {
    monthList.style.display = 'block';
  } else {
    monthList.style.display = 'none';
  }
}

// Show all posts by default on page load
document.addEventListener('DOMContentLoaded', function () {
  filterPosts('All', 'All');
});
