const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({})

// Todo.findOneAndRemove().then((doc) => {
//
// });

var id = '5a26d7eb7fa587dc1bb3b166';

Todo.findByIdAndRemove(id).then((todo) => {
  console.log(todo);
});
