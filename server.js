const { DH_NOT_SUITABLE_GENERATOR } = require('constants');
const express = require('express')
const fs = require('fs');
const app = express()

const PORT = process.env.PORT || 3000;
const saveFile = 'db/db.json' // save file, it's a hidden file

// will share any static public files with the browser
app.use( express.static('public') )
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//function to stringify the notes and save it in savefile
function writeNotes(notes) {
    let noteString = JSON.stringify(notes);
    fs.writeFileSync(saveFile, noteString);
}

//function to read notes from the savefile
function getNotes() {
    return fs.existsSync(saveFile) ?
        JSON.parse( fs.readFileSync(saveFile) ) : [];
}

//function to add new notes and save them.
function addNotes(note) {
    let notes = getNotes();
    notes.push(note);
    writeNotes(notes);
    return note;
}

//funtion to delete previously saved notes
function deleteNotes(id) {
    let notes = getNotes();
    notes.splice(id, 1); 
    writeNotes(notes);
    return notes;
}

//Get request to read the `db.json` file and return all saved notes.
app.get('/api/notes',function(req,res) {    
    const notes = getNotes().map((note, id) => {
        return {
            id: id + 1,
            title: note.title,
            text: note.text
        }
    });
    res.send(notes);
});

//Post menthod to receive a new note, add it to db.json file amd return the new note to client
app.post('/api/notes',function(req,res) {
    const note = req.body;
    addNotes(note);
    res.send(note);
});

//Delete method that takes unique id of the notes as request parameter to delete the notes
app.delete('/api/notes/:id',function(req,res) {
    const id = req.params.id - 1;
    deleteNotes(id);
    res.send(getNotes());
});

//Get method to return the notes.html file
app.get('/notes',function(req,res) {
    res.sendFile(__dirname + "/public/notes.html");
});

//Get method to return index.html file
app.get('*',function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
});


app.listen(PORT, function() {
    console.log('Taking notes on PORT ' + PORT);
});