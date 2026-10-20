
const noteForm = document.getElementById("noteForm");
const titleInput = document.getElementById("noteTitle");
const contentInput = document.getElementById("noteContent");
const searchInput = document.getElementById("searchInput");

const notesGrid = document.getElementById("notesGrid");
const emptyMessage = document.getElementById("emptyMessage");

const totalNotes = document.getElementById("totalNotes");
const pinnedNotes = document.getElementById("pinnedNotes");
const resultCount = document.getElementById("resultCount");

const formHeading = document.getElementById("formHeading");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

const STORAGE_KEY = "jengaNotes";

// Load saved notes
let notes = [];

try {
    const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );

    if (Array.isArray(saved)) {
        notes = saved;
    }
} catch (error) {
    console.error("Could not load saved notes:", error);
}

// Track which note is being edited
let editingId = null;

// Save notes to localStorage
function saveNotes() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(notes)
    );
}

// Format note date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString(
        "en-NG",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );
}

// Update dashboard
function updateDashboard() {
    totalNotes.textContent = notes.length;

    pinnedNotes.textContent = notes.filter(
        note => note.pinned
    ).length;
}

// Create a button
function createButton(text, className, onClick) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = text;
    button.className = className;
    button.addEventListener("click", onClick);

    return button;
}

// Display notes
function renderNotes() {
    notesGrid.replaceChildren();

    const searchTerm =
        searchInput.value.trim().toLowerCase();

    const filteredNotes = notes
        .filter(note => {
            return (
                note.title.toLowerCase().includes(searchTerm) ||
                note.content.toLowerCase().includes(searchTerm)
            );
        })
        .sort((a, b) => {
            if (a.pinned !== b.pinned) {
                return Number(b.pinned) - Number(a.pinned);
            }

            return new Date(b.updatedAt) -
                   new Date(a.updatedAt);
        });

    resultCount.textContent =
        `${filteredNotes.length} notes`;

    emptyMessage.style.display =
        filteredNotes.length === 0 ? "block" : "none";

    emptyMessage.textContent =
        notes.length === 0
            ? "No notes yet. Create your first note!"
            : "No matching notes found.";

    filteredNotes.forEach(note => {
        const card = document.createElement("article");
        card.className =
            "note-card" + (note.pinned ? " pinned" : "");

        if (note.pinned) {
            const pinnedLabel =
                document.createElement("span");

            pinnedLabel.className = "pinned-label";
            pinnedLabel.textContent = "📌 Pinned Note";

            card.appendChild(pinnedLabel);
        }

        const heading = document.createElement("h3");
        heading.textContent = note.title;

        const content = document.createElement("p");
        content.className = "note-content";
        content.textContent = note.content;

        const date = document.createElement("p");
        date.className = "note-date";
        date.textContent =
            "Updated: " + formatDate(note.updatedAt);

        const actions = document.createElement("div");
        actions.className = "note-actions";

        const pinButton = createButton(
            note.pinned ? "Unpin" : "Pin",
            "pin-btn",
            () => togglePin(note.id)
        );

        const editButton = createButton(
            "Edit",
            "edit-btn",
            () => editNote(note.id)
        );

        const deleteButton = createButton(
            "Delete",
            "delete-btn",
            () => deleteNote(note.id)
        );

        actions.append(
            pinButton,
            editButton,
            deleteButton
        );

        card.append(
            heading,
            content,
            date,
            actions
        );

        notesGrid.appendChild(card);
    });

    updateDashboard();
}

// Reset the form
function resetForm() {
    noteForm.reset();
    editingId = null;

    formHeading.textContent = "Create New Note";
    saveBtn.textContent = "+ Add Note";
    cancelBtn.hidden = true;
}

// Add or update note
noteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
        alert("Please enter a title and note content.");
        return;
    }

    const now = new Date().toISOString();

    if (editingId !== null) {
        notes = notes.map(note => {
            if (note.id === editingId) {
                return {
                    ...note,
                    title: title,
                    content: content,
                    updatedAt: now
                };
            }

            return note;
        });

    } else {
        const newNote = {
            id: crypto.randomUUID(),
            title: title,
            content: content,
            pinned: false,
            createdAt: now,
            updatedAt: now
        };

        notes.unshift(newNote);
    }

    saveNotes();
    renderNotes();
    resetForm();
});

// Edit existing note
function editNote(id) {
    const note = notes.find(note => note.id === id);

    if (!note) return;

    editingId = id;

    titleInput.value = note.title;
    contentInput.value = note.content;

    formHeading.textContent = "Edit Note";
    saveBtn.textContent = "Save Changes";
    cancelBtn.hidden = false;

    titleInput.focus();
    noteForm.scrollIntoView({ behavior: "smooth" });
}

// Pin or unpin note
function togglePin(id) {
    notes = notes.map(note => {
        if (note.id === id) {
            return {
                ...note,
                pinned: !note.pinned
            };
        }

        return note;
    });

    saveNotes();
    renderNotes();
}

// Delete note
function deleteNote(id) {
    const confirmed = confirm(
        "Are you sure you want to delete this note?"
    );

    if (!confirmed) return;

    notes = notes.filter(note => note.id !== id);

    if (editingId === id) {
        resetForm();
    }

    saveNotes();
    renderNotes();
}

// Cancel editing
cancelBtn.addEventListener("click", resetForm);

// Search notes as the user types
searchInput.addEventListener("input", renderNotes);

// Initial display
renderNotes();
