document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('search-toggle');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const closeSearch = document.getElementById('close-search');
    const searchResults = document.getElementById('search-results');



const pages = [
    { title: "Homepagina", url: "./index.html" },
    { title: "Planningshulp", url: "./planningshulp/planningshulp.html" },
    { title: "Planning 2025", url: "./planning_2025/planning_2025.html" },
    { title: "Zadenbibliotheek", url: "./zaden/zaden.html" },
    { title: "Compabiliteitteelt", url: "./compabiliteit/compabiliteit.html" },
    { title: "Plantinformatie", url: "./guide/guide.html"},
    { title: "Indeling", url: "./indeling/indeling.html"},
    { title: "Plantcyclus", url: "./plantcyclus/plantcyclus.html"},
    { title: "To Do", url: "./todo/todo.html"}
];

 // Toggle the visibility of the search bar
 searchToggle.addEventListener('click', () => {
    searchBar.style.display = searchBar.style.display === 'none' || searchBar.style.display === '' ? 'block' : 'none';
    searchInput.focus();
});

// Close the search bar when the 'X' button is clicked
closeSearch.addEventListener('click', () => {
    searchBar.style.display = 'none';
});

// Listen for input and show search results
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    if (query.length === 0) {
        searchResults.style.display = 'none';  // Hide results if no query
        return;
    }

    // Filter pages based on search input
    const results = pages.filter(page =>
        page.title.toLowerCase().includes(query)
    );

    displayResults(results);
});

// Function to display search results
function displayResults(results) {
    searchResults.innerHTML = '';  // Clear previous results

    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(result => {
            const link = document.createElement('a');
            link.href = result.url;
            link.textContent = result.title;
            searchResults.appendChild(link);
        });
    }

    // Show search results if there are matches
    searchResults.style.display = results.length > 0 ? 'block' : 'none';
}
});