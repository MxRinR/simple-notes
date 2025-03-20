// Initialize folder and notes
let folder = {
  name: "Poetry",
  notes: [
    {
      name: "Moonlit Dream",
      text: "Silver waves on midnight sand,\nSoft winds trace a fleeting hand.",
      date: "2025-02-20"
    },
    {
      name: "Falling Leaves",
      text: "Golden whispers kiss the ground,\nAutumn’s song, a fleeting sound.",
      date: "2024-08-18"
    },
    {
      name: "Echoes of Rain",
      text: "Raindrops dance on windowpanes,\nSoft and steady, quiet refrains.",
      date: "2024-06-17"
    },
    {
      name: "Morning Light",
      text: "Golden beams on dewdrop lace,\nA tender touch, a warm embrace.",
      date: "2024-02-15"
    },
    {
      name: "Night Sun",
      text: "__________",
      date: "2024-02-13"
    }
  ]
};

function saveNote() {
  let noteNameInput = document.getElementById("noteName");
  let noteContentInput = document.querySelector(".noteContent");

  let noteName = noteNameInput.value.trim();
  let noteContent = noteContentInput.value.trim();
  
  let newNote = {
      name: noteName,
      content: noteContent,
      date: new Date().toLocaleDateString()
  };

  // found: get the current notes data from localStorage 
  let notesData = JSON.parse(localStorage.getItem("notesData")) || { notesList: [] };

  // add new note to the top of the array
  notesData.notesList.unshift(newNote); 

  // found: save the updated notes to localStorage
  localStorage.setItem("notesData", JSON.stringify(notesData));

  // found: redirect to the main page
  window.location.href = "index.html"; 
}

// found: get notes from localStorage and display them on the main page
function loadNotes() {
  let notesContainer = document.getElementById("notes");

  // found: get the notes data from localStorage
  let notesData = JSON.parse(localStorage.getItem("notesData")) || { notesList: [] };

  // display each note
  notesData.notesList.forEach(note => {
    let noteElement = document.createElement("section");
    noteElement.classList.add("noteThumbnail");

    noteElement.innerHTML = `
      <h3 class="noteName">${note.name}</h3>
      <h4 class="noteDate">${note.date}</h4>
    `;
    
    notesContainer.appendChild(noteElement);
  });
}

// found: auto resize the note text area based on content
function autoResize(textarea) {
  textarea.style.height = "auto"; 
  textarea.style.height = (textarea.scrollHeight) + "px"; 
}

// save the note when the check icon is clicked
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".noteContent")) {
    document.querySelector(".bi-check-lg").parentElement.addEventListener("click", function (event) {
      event.preventDefault(); // found: prevent default behavior
      saveNote();
    });
  }

  // load and display notes if on the main page
  if (document.getElementById("notes")) {
    loadNotes(); 
  }
});

