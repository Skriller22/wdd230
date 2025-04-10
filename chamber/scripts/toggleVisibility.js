function toggleVisibility(id, event) {
    if (event) {
        event.stopPropagation(); // Prevent the event from bubbling up
    }
    const element = document.querySelector(id);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector("#banner");
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Show banner only on Monday (1), Tuesday (2), and Wednesday (3)
    if (today >= 1 && today <= 3) {
        banner.style.display = "flex";
    }
});