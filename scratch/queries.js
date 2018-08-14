'use strict';

const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

const Note = require('../models/note');


//Find notes using Note.find
// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     const searchTerm = 'lady gaga';
//     let filter = {};

//     if (searchTerm) {
//       filter.title = { $regex: searchTerm, $options: 'i' };
//     }

//     return Note.find(filter).sort({ updatedAt: 'desc' });
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });

// Find note by id using Note.findById
// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     const id = '000000000000000000000005';
//     return Note.findById(id);
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });

// Create a new note using Note.create
// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     const noteObj = {
//       title: 'Why dogs are better than cats',
//       content: 'Every reason'
//     };
//     return Note.create(noteObj);
//   })
//   .then(results => {
//     console.log(results);
//   })
//   .then(() => {
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });

// Update a note by id using Note.findByIdAndUpdate
// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     const id = '000000000000000000000014';
//     const updatedNote = {
//       title: 'I have been created!',
//       content: 'I was found by id and updated, but I did not exist, so I was created'
//     };
//     return Note.findByIdAndUpdate(id, updatedNote, {upsert: true, new: true})
//       .then(results => {
//         console.log(results);
//       })
//       .then(() => {
//         return mongoose.disconnect();
//       })
//       .catch(err => {
//         console.error(`ERROR: ${err.message}`);
//         console.error(err);
//       });
//   });

//Delete a note by id using Note.findByIdAndRemove
mongoose.connect(MONGODB_URI)
  .then(() => {
    const id = '000000000000000000000014';
    return Note.findByIdAndRemove(id)
      .then(results => {
        console.log(results, `${id} is being removed`);
      });
  }) 
  .then(() => {
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });