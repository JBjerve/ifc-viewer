// script.js
const dragDropArea = document.getElementById('dragDropArea');
const fileInput = document.getElementById('fileInput');
const openFileExplorer = document.getElementById('openFileExplorer');

// Drag and drop event handlers
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
    // Process the dropped files
    handleFiles(files);
});

// Open file explorer button click event
openFileExplorer.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    // Process the selected files
    handleFiles(files);
});

function handleFiles(files) {
    if (files.length > 0) {
        const selectedFile = files[0];
        const extension = selectedFile.name.split('.').pop().toLowerCase();

        if (extension === 'ifc') {
            // Open a new page or do further processing
            window.location.href = './src/viewer.html'; // Change the URL to the new page

        } else {
            // Display an error message
            alert('Please choose an IFC file.');
        }
    }
}
