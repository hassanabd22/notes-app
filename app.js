const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');
const { argv } = require('yargs');

// Create Add command
yargs.command({
    command:'add',
    describe: 'Add The Notes',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body : {
            describe:"Notes body",
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }

});

// Create Remove command
yargs.command({
    command:'remove',
    describe: 'remove The Notes',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    }

});

// Create list command
yargs.command({
    command:'list',
    describe: 'List Your Notes',
    handler: function () {
        notes.listNotes()
    }

});

// Create Read command
yargs.command({
    command:'read',
    describe: 'Read a Notes',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
    },
    handler: function () {
        notes.readNotes(argv.title)
    }

});

yargs.parse();




