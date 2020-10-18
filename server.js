const { DH_NOT_SUITABLE_GENERATOR } = require('constants');
const express = require('express')
const fs = require('fs');
const app = express()

const PORT = process.env.PORT || 3000;
const saveFile = 'db/db.json' // save file, it's a hidden file

// will share any static html files with the browser
app.use( express.static('public') )
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

function writeNotes(notes) {
    let noteString = JSON.stringify(notes);
    fs.writeFileSync(saveFile, noteString);
}

function getNotes() {
    return fs.existsSync(saveFile) ?
        JSON.parse( fs.readFileSync(saveFile) ) : [];
}

function addNotes(note) {
    let notes = getNotes();
    notes.push(note);
    writeNotes(notes);
    return note;
}

function deleteNotes(note) {
    let notes = getNotes();
    notes.splice(id, 1); 
    writeNotes(notes);
    return notes;
}

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

app.post('/api/notes',function(req,res) {
    const note = req.body;
    addNotes(note);
    res.send(note);
});

app.delete('/api/notes/:id',function(req,res) {
    const id = req.params.id - 1;
    deleteNote(id);
    res.send(getNotes());
});

app.get('/notes',function(req,res) {
    res.sendFile(__dirname + "/public/notes.html");
});

app.get('*',function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
    console.log('Taking notes on PORT ' + PORT);
});