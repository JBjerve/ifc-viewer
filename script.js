// Variables
const dragDropArea = document.getElementById('dragDropArea');
const openFileExplorer = document.getElementById('openFileExplorer');
const viewerContainer = document.getElementById('viewer-container');
const fileBox = document.getElementById('fileBox');
const banner = document.getElementById('banner');
const pad = document.getElementById('pad');
let fileInput = document.getElementById('fileInput');

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
});

openFileExplorer.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const files = e.target.files;

});

fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0) {
        fileBox.style.display = 'none';
        banner.style.display = 'none';
        pad.style.display = 'none';     
    }
})