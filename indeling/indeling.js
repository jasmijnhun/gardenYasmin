// Elements
const gardenGrid = document.getElementById('gardenGrid');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselContainer = document.getElementById('carousel-container');
const draggableItems = document.querySelectorAll('.draggable');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const resetBtn = document.getElementById('resetBtn');
const saveImageBtn = document.getElementById('saveImageBtn');
const updateGridBtn = document.getElementById('updateGridBtn');
const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('cols');

// Variables for Carousel
let carouselIndex = 0;

// Create Garden Grid
function createGardenGrid(rows, cols) {
    gardenGrid.innerHTML = ''; // Clear any existing grid
    gardenGrid.style.gridTemplateColumns = `repeat(${cols}, 50px)`; // Use 1fr for flexible sizing
    gardenGrid.style.gridTemplateRows = `repeat(${rows}, 50px)`; // Fixed height for each row (you can adjust this)

    // Calculate and apply dynamic size for grid items based on available space
    const containerWidth = gardenGrid.clientWidth;
    const cellSize = containerWidth / cols;

    // Adjust cell size based on the grid's container width
    const cells = gardenGrid.querySelectorAll('div');
    cells.forEach(cell => {
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
    });

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        gardenGrid.appendChild(cell);

        // Allow grid cells to accept dragged images
        cell.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        cell.addEventListener('drop', (e) => {
            e.preventDefault();
            if (!e.target.hasChildNodes()) {
                const img = document.createElement('img');
                img.src = draggedItem.src;
                img.alt = draggedItem.alt;
                e.target.appendChild(img);
            }
        });
    }
}

// Draggable Images Logic
let draggedItem = null;

draggableItems.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    });
});

// Carousel Navigation
function moveCarousel(direction) {
    const totalImages = document.querySelectorAll('.draggable').length;
    const imageWidth = 110;  // Image width + margin
    const maxOffset = (totalImages - 1) * imageWidth;

    if (direction === 'prev' && carouselIndex > 0) {
        carouselIndex--;
    } else if (direction === 'next' && carouselIndex < totalImages - 1) {
        carouselIndex++;
    }

    const offset = carouselIndex * imageWidth;
    carouselContainer.style.transform = `translateX(-${offset}px)`;
}

prevBtn.addEventListener('click', () => moveCarousel('prev'));
nextBtn.addEventListener('click', () => moveCarousel('next'));

// Initialize grid with 5x5 layout
createGardenGrid(5, 5);

// Save Layout Function
function saveLayout() {
    const gridLayout = [];
    const cells = gardenGrid.querySelectorAll('div');
    cells.forEach(cell => {
        if (cell.hasChildNodes()) {
            const img = cell.querySelector('img');
            gridLayout.push({ src: img.src, alt: img.alt });
        } else {
            gridLayout.push(null);
        }
    });
    localStorage.setItem('gardenLayout', JSON.stringify(gridLayout));
    alert("Layout saved!");
}

// Load Layout Function
function loadLayout() {
    const savedLayout = JSON.parse(localStorage.getItem('gardenLayout'));
    if (savedLayout) {
        const cells = gardenGrid.querySelectorAll('div');
        savedLayout.forEach((imgData, index) => {
            if (imgData) {
                const img = document.createElement('img');
                img.src = imgData.src;
                img.alt = imgData.alt;
                cells[index].appendChild(img);
            } else {
                cells[index].innerHTML = ''; // Clear the cell if no image is saved
            }
        });
        alert("Layout loaded!");
    } else {
        alert("No saved layout found!");
    }
}

// Reset Layout Function
function resetLayout() {
    const cells = gardenGrid.querySelectorAll('div');
    cells.forEach(cell => {
        cell.innerHTML = ''; // Clear all images from the grid
    });
    alert("Grid reset!");
}

   function saveAsImage() {
            const gardenGrid = document.getElementById('gardenGrid'); // Ensure we are getting the correct element
            if (!gardenGrid) {
                console.error("Error: Garden grid element not found!");
                return;
            }

            console.log("Capturing the garden grid as an image...");

            // Ensure html2canvas is available
            if (typeof html2canvas === 'function') {
                console.log("html2canvas is available");

                html2canvas(gardenGrid).then((canvas) => {
                    const imgURL = canvas.toDataURL("image/png");
                    console.log("Image URL generated:", imgURL); // Debug log for image URL

                    // Create a temporary download link
                    const link = document.createElement('a');
                    link.href = imgURL;
                    link.download = 'garden.png'; // Name of the downloaded image file
                    link.click(); // Simulate a click to trigger the download
                }).catch((error) => {
                    console.error("Error during image capture:", error);
                });
            } else {
                console.error("html2canvas is not loaded or not a function.");
            }
        }

        // Attach event listener after DOM is fully loaded
        window.addEventListener('load', function () {
            const saveImageBtn = document.getElementById('saveImageBtn');

            // Ensure button exists and add event listener
            if (saveImageBtn) {
                saveImageBtn.addEventListener('click', saveAsImage);
            } else {
                console.error("Error: Save button element not found!");
            }
        });

// Update Grid Size
updateGridBtn.addEventListener('click', () => {
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    createGardenGrid(rows, cols);
});

// Event Listeners for Buttons
saveBtn.addEventListener('click', saveLayout);
loadBtn.addEventListener('click', loadLayout);
resetBtn.addEventListener('click', resetLayout);
saveImageBtn.addEventListener('click', saveAsImage);
