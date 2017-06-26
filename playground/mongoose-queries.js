const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59455ddaca7f252599b6203c';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', JSON.stringify(todos, undefined, 2));
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', JSON.stringify(todo, undefined, 2));
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo by Id', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));

// User.findById(id).then((user) => {
//   if(!user) {
//     return console.log('User not found!');
//   }
//   console.log(JSON.stringify(user, undefined, 2));
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
