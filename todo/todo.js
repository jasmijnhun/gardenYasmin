// Select all tab buttons and tab content elements
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Function to handle tab switching
function switchTab(event) {
    // Remove the 'active' class from all buttons and content
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add the 'active' class to the clicked button and the corresponding content
    const index = Array.from(tabButtons).indexOf(event.target);
    tabButtons[index].classList.add('active');
    tabContents[index].classList.add('active');
}

// Add event listeners to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', switchTab);
});
