const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Please enter a value");
        return;
    }

    const li = document.createElement("li");
    const deletButton = document.createElement("button");
    deletButton.textContent = "❌";
    li.textContent = input.value;
    li.appendChild(deletButton);
    list.appendChild(li);
    input.value = ""; // Clear the input field after adding the item
    input.focus(); // Set focus back to the input field

    deletButton.addEventListener("click", () => {
        list.removeChild(li); // Remove the list item when the delete button is clicked
    });
});

input.focus(); // Set focus on the input field when the page loads