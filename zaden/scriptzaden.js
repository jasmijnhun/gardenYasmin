// Function to show only the selected category and hide all other categories
function selectCategory(category) {
    // Select all elements (groente, fruit, kruiden, bloemen)
    const allElements = document.querySelectorAll('.groente, .fruit, .kruiden, .bloemen, .bladgroenten, .vruchtgroeten, .knolgewassen, .uien, .stengelgewassen, .peulvruchten, .eenjarig, .tweejarig, .meerjarig');
    
    // Loop through all elements and hide them
    allElements.forEach(function(element) {
        element.style.display = 'none'; // Hide all elements initially
    });

    // Select the elements of the category that was clicked and make them visible
    const selectedElements = document.querySelectorAll(`.${category}`);
    selectedElements.forEach(function(element) {
        element.style.display = 'inline-block'; // Show only the selected category
        element.classList.add('highlight'); // Optionally add a highlight class
    });
}




// Function to search the whole page and display only matching elements, with highlight
function searchPage() {
    // Get the search term and convert it to lowercase for case-insensitive matching
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Get all elements with the classes we are interested in: .groente, .fruit, .kruiden, .bloemen
    const items = document.querySelectorAll('.groente, .fruit, .kruiden, .bloemen');

    // Loop through each item (element with the class)
    items.forEach(function(item) {
        // Get the text content of the entire element (including any text inside the divs)
        const itemText = item.textContent.toLowerCase();

        // If the item contains the search term, show and highlight it
        if (itemText.includes(searchTerm)) {
            item.style.display = 'inline-block';  // Make the element visible
            item.classList.add('highlight');  // Add the 'highlight' class to apply the highlight effect
        } else {
            item.style.display = 'none';   // Hide the element
            item.classList.remove('highlight');  // Remove the 'highlight' class if no match
        }
    });
}



