const notesContainer = document.querySelector(".notes-container");

function createPage() {
  const page = document.createElement("p");
  page.classList.add("input-box");
  page.setAttribute("contenteditable", "true");
  page.setAttribute("onKeyUp", "updateNote()");
  const img = document.createElement("img");
  img.setAttribute("src", "./images/delete.png");
  img.setAttribute("alt", "delete");
  notesContainer.appendChild(page).appendChild(img);
  updateLocalStorage();
}

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateLocalStorage();
      };
    });
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateLocalStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

function updateLocalStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function getLocalStorage() {
  const notes = localStorage.getItem("notes");

  if (notes) {
    notesContainer.innerHTML = notes;
  }
}

function removeNotes(){
    localStorage.clear();
    while(notesContainer.firstChild){
        notesContainer.removeChild(notesContainer.firstChild);
    }
}

getLocalStorage();
