const noteForm = document.getElementById("noteForm");
const titleInput = document.getElementById("noteTitle");
const contentInput = document.getElementById("noteContent");
const searchInput = document.getElementById("searchInput");


const formHeading = document.getElementById("formHeading");


// Load Saved Notes...
let notes = [];

try {
    const saved = JSON.parse(
        localStorage.getItems(STORAGE_KEY) || "[]"
    );
    if (Array.isArray(saved)) {
        notes = saved;
    }
} catch (error) {
    console.error("Could not load Saved notes:", error);
}
