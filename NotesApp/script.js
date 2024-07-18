//Selecting elements
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

//localStorage'dan notları yükler.
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//localStorage'a notları kaydeder.
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Add click event to "Create Notes" button
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);

  /*add click event to img element
  img.addEventListener("click", () => {
    inputBox.remove();
    updateStorage();
  });*/
});

//Added alternative method for deleting notes by handling click events directly on notesContainer
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

//// Add an event listener to handle the Enter key press in contenteditable elements
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
     // Insert a line break instead of a new paragraph
    document.execCommand("insertLineBreak");
     // Prevent the default behavior of the Enter key
    event.preventDefault();
  }
});
