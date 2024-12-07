document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('search-toggle');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const closeSearch = document.getElementById('close-search');
    const searchResults = document.getElementById('search-results');

    // Store all the extracted content from current and other pages
    let pagesContent = [];

    // URLs of pages to search (add more URLs as needed)
    const pageUrls = [
        './index.html',
        './planningshulp/planningshulp.html',
        './planning_2025/planning_2025.html',
        './zaden/zaden.html',
        './compabiliteit/compabiliteit.html',
        './guide/guide.html',
        './indeling/indeling.html',
        './plantcyclus/plantcyclus.html',
        './todo/todo.html'
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

        // Filter content based on the search query
        const results = pagesContent.flat().filter(page => page.text.toLowerCase().includes(query));

        displayResults(results);
    });

    // Function to dynamically extract content from the current page and others
    async function fetchPageContent() {
        // First, extract content from the current page
        const currentPageContent = getPageContent(document, './index.html');  // Current page URL for reference
        pagesContent.push(currentPageContent);

        // Then, fetch and extract content from other pages asynchronously
        const fetchPromises = pageUrls.map(url => fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const pageContent = getPageContent(doc, url);  // Use the URL of the page for links
                pagesContent.push(pageContent);
            })
            .catch(error => console.log('Error fetching page:', url, error))
        );

        // Wait until all pages have been fetched and their content extracted
        await Promise.all(fetchPromises);
    }

    // Function to extract content from a page document (current or fetched)
    function getPageContent(doc, pageUrl) {
        const contentElements = doc.querySelectorAll('h1, h2, h3, p, a, th, td');  // Can add more selectors as needed
        const pageContent = [];

        contentElements.forEach(element => {
            pageContent.push({
                text: element.textContent,   // Extract the text content of each element
                link: element.tagName === 'A' ? element.href : pageUrl  // If it's a link, store the href, else use the page URL
            });
        });

        return pageContent;
    }

    // Function to display search results
    function displayResults(results) {
        searchResults.innerHTML = '';  // Clear previous results

        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
        } else {
            results.forEach(result => {
                const link = document.createElement('a');
                link.href = result.link;  // Link to the relevant page
                link.textContent = result.text;  // Display the matching content
                searchResults.appendChild(link);
            });
        }

        // Show search results if there are matches
        searchResults.style.display = results.length > 0 ? 'block' : 'none';
    }

    // Fetch content from all pages when the page loads
    fetchPageContent();
});