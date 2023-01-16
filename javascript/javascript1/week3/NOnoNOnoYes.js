const notes = [];
function saveNote(content, id) {
    return notes.push({content:content, id:id})
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);
function getNote(id) {
  if (isNaN(id) || id === "") {
    return "Please put a valid ID"
  }
  for (let i = 0; i<notes.length; i++) {
    if (notes[i].id == id) {
        return notes[i]
    }  
  }
}
const firstNote = getNote(1);
const secondNote = getNote(2);
const otherNote = getNote( );
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
console.log(secondNote);
console.log(otherNote);

function logOutNotesFormatted() {
  for (let i = 0; i<notes.length; i++) {
      console.log(`The note with ID: ${notes[i].id}, has the following note text: ${notes[i].content}`)
    }  
}
logOutNotesFormatted();