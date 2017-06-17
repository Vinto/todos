// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Spin the fidget'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Chow lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Cristiano'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('594512801d2c70141a6a1ffe')
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
