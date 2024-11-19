document.addEventListener("DOMContentLoaded", function() {
    // Select all triggers and content
    const triggers = document.querySelectorAll('.trigger');
    const contents = document.querySelectorAll('.content');
    const container = document.querySelector('.companion-container'); // Parent container

    // Add click event listeners to each trigger
    triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', function() {
            const content = contents[index]; // Get the corresponding content
            const isOpen = content.classList.contains('open');

            // Toggle the 'open' class to show/hide content
            content.classList.toggle('open', !isOpen);

            // Adjust the gap between the containers based on content visibility
            adjustGap();
        });
    });

    // Function to adjust the vertical margin between the containers based on visibility of content
    function adjustGap() {
        // Check if any content has the 'open' class
        const anyContentVisible = Array.from(contents).some(content => content.classList.contains('open'));

        // Adjust vertical margin between containers: expand gap if any content is visible, otherwise shrink it
        if (anyContentVisible) {
            container.classList.add('open'); // Add 'open' class to container to expand gap
        } else {
            container.classList.remove('open'); // Remove 'open' class to shrink gap
        }
    }

    // Initial gap adjustment
    adjustGap();
});
