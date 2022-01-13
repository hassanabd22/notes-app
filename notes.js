const fs = require('fs');
const chalk = require('chalk');


// create function add notes
function addNotes (title , body) {
    const notes = loadNotes();
    const dublicateNotes = notes.find( note => note.title === title);
    if (!dublicateNotes) {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log('The notes is add')
    } else {
        console.log('The Title is Repat')
    }
    
}

// create function remove notes
function removeNotes (title) {
    const notes = loadNotes();
    const noteToKeep = notes.filter( note => note.title !== title);
        saveNotes(noteToKeep);
        if (noteToKeep.length !== notes.length) {
            console.log(chalk.green.inverse('notes is romve'))
        } else {
            console.log(chalk.bgRed('notes Not Romve'))
        }
        
}

// create function list notes
function listNotes () {
    const notes = loadNotes();
    console.log(chalk.bold.underline.white.inverse("The List OF Notes"))
    notes.forEach( note  => {
        console.log(chalk.bold.blue(note.title));
        console.log(note.body);
    });
        
}

// create function read notes
function readNotes (title) {
    const notes = loadNotes();
    const note = notes.find( note => note.title === title);
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('The Note not Fond'))
    }
    
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)
}


function loadNotes () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}




// export function to app file
module.exports = {
    addNotes: addNotes,
    removeNotes:removeNotes,
    listNotes: listNotes,
    readNotes:readNotes
};