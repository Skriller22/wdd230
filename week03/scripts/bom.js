const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => { // Loop through the chapters array and display each chapter in the list
    displayList(chapter);
});

button.addEventListener("click", () => {
    const chapter = input.value.trim(); // Get the value from the input field and trim whitespace
    if (chapter === "") return; // Ignore empty input

    displayList(chapter); // Call the function to display the chapter in the list
    chaptersArray.push(chapter); // Add the new chapter to the array
    setChapterList(); // Save the updated array to local storage
    input.value = ""; // Clear the input field after adding the chapter
    input.focus(); // Set focus back to the input field
    
});

function displayList(item) {
    let li = document.createElement("li"); // Create a new list item
    let deleteButton = document.createElement("button"); // Create a delete button
    li.textContent = item; // Set the text of the list item to the chapter name
    deleteButton.textContent = "❌"; // Set the text of the delete button
    deleteButton.classList.add("delete"); // Add a class to the delete button for styling
    li.append(deleteButton); // Append the delete button to the list item
    list.append(li); // Append the list item to the unordered list
    deleteButton.addEventListener("click", function () {
        list.removeChild(li); // Remove the list item from the unordered list
        deleteChapter(li.textContent); // Call the function to remove the chapter from the array
        input.focus(); // Set focus back to the input field
    });
}

function setChapterList() {
    localStorage.setItem("top10BOMList", JSON.stringify(chaptersArray)); // Save the chapters array to local storage
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("top10BOMList")); // Retrieve the chapters array from local storage
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove the delete button character from the chapter name
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Filter out the deleted chapter from the array
    setChapterList(); // Update local storage with the new array
}

input.focus(); // Set focus on the input field when the page loads