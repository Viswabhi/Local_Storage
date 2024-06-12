document.addEventListener('DOMContentLoaded', (event) => {
    const textArea = document.getElementById('textArea');

    // Load saved text from local storage on page load
    if (localStorage.getItem('autoSavedText')) {
        textArea.value = localStorage.getItem('autoSavedText');
    }

    // Save text to local storage whenever the user types
    textArea.addEventListener('input', () => {
        localStorage.setItem('autoSavedText', textArea.value);
    });
});
