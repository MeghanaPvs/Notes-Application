const fs = require('fs')
const chalk = require('chalk')

// const getNotes = () => {
//     return 'Your notes...'
// }

//ADDING NOTE
const addNote = (title, body) => { //need to pass title and body as Command line args
    const notes = loadNotes()
    //Checking for duplicate title and body
    // const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicateNote = notes.find((note)=>note.title === title)
    // const duplicateNotes = notes.filter(function (note) { // this function calls 1 tym for each object (for each json obj)
    //     return note.title === title
    // })

    if (!duplicateNote) { //i.e no duplicates
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title already taken!'))
    }
}

//REMOVE NOTE

const removeNote = (title) => { //remove note takes only title
    // console.log('Note removed: ' + title)
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    // const notesToKeep = notes.filter(function(note){
    //     return note.title !== title
    // })


    if(notes.length>notesToKeep.length){
       console.log(chalk.green.inverse('Note Removed'));
       saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No note found'));
    }
    
}


//LISTING NOTE

const listNotes = ()=>{
const notes = loadNotes();
console.log(chalk.cyan.inverse('Your notes!!'));
notes.forEach(note => {
    console.log(note.title);
    
});
}


//READING  A NOTE
const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title === title)
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }
    else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

//TO SAVE NOTES
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//TO LOAD NOTES 
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}
