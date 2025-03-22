function toggleVisibility(id, event) {
    if (event) {
        event.stopPropagation(); // Prevent the event from bubbling up
    }
    const element = document.querySelector(id);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}