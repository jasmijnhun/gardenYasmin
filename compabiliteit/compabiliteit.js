document.addEventListener("DOMContentLoaded", function() {
    // Select the trigger and content divs by their IDs
    const triggers = document.querySelectorAll('.trigger');
    const contents = document.querySelectorAll('.content');

    // Loop through each trigger
    triggers.forEach((trigger, index) => {
        const content = contents[index];

        // Add click event listener to the trigger div
        trigger.addEventListener('click', function() {
            // Toggle the 'open' class to show or hide the content
            content.classList.toggle('open');
        });
    });
});
