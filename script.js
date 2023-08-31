// Get references to HTML elements
const dragDropArea = document.getElementById('dragDropArea');
const openFileExplorer = document.getElementById('openFileExplorer');
const viewerContainer = document.getElementById('viewer-container');
const canvas = document.getElementsByTagName('canvas');
const fileBox = document.getElementById('fileBox');
const banner = document.getElementById('banner');
const pad = document.getElementById('pad');
let fileInput = document.getElementById('fileInput');

// Add event listeners for drag and drop functionality
dragDropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragDropArea.classList.add('highlight');
});

dragDropArea.addEventListener('dragleave', () => {
    dragDropArea.classList.remove('highlight');
});

dragDropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dragDropArea.classList.remove('highlight');
    const files = e.dataTransfer.files;

    fileInput.files = files;
    
    const changeEvent = new Event('change', { bubbles: true });
    fileInput.dispatchEvent(changeEvent);
});

// Open file explorer when the "Open File Explorer" button is clicked
openFileExplorer.addEventListener('click', () => {
    fileInput.click();
});

// Handle the change event of the file input
fileInput.addEventListener('change', (e) => {
    const files = e.target.files;

});

// Hiding the containers when a file is loaded
fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0) {
        fileBox.style.display = 'none';
        banner.style.display = 'none';
        pad.style.display = 'none';
        viewerContainer.style.height = 100 + 'vh'
        viewerContainer.style.widows = 100 + 'vw'
    }
})