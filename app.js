const yargs = require('yargs');
const notes = require('./notes');


//customize yargs version
yargs.version('1.1.0'); //node app.js --version

yargs.command({ //creating a new command
    command:'add', //Command name
    describe:'Add a new note!', //not mandatory =>Just to know the description of that particulat command
    builder:{ // TO add the options we need
        title:{ // 1. Adding title
            describe:'Note Title', //title description
            demandOptions:true, //Default value is false
            type:'string' //title should be of type string(mandatory)
        },
        body:{
            describe:'Note body', //body description
            demandOptions:true,
            type:'string'  //title should be of type string(mandatory)
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
}) 

//Create Remove command:
yargs.command({
    command:'remove',
    describe:'Remove note',
    builder:{
        title:{
         describe:'Note Title',
         demandOption:true,
         type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

//Creating List Notes:
yargs.command({
    command:'list',
    describe:'List your notes',
    handler(){
        notes.listNotes();
        // console.log('Listing out all notes!!');
    }
})

//Create Read command:
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
        // console.log('Reading a note!!');
    }
})

yargs.parse() //To pass the args