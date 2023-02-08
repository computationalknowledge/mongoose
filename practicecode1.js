An Introduction to Mongoose for MongoDB and Node.js
Mongoose is a JavaScript framework that is commonly used in a Node.js applications with a MongoDB database. 

Mongoose   https://mongoosejs.com/
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
Mongoose is a popular ODM (Object Document Mapping) library for Node.js that provides a way to interact with MongoDB databases. It allows you to define the schema for your JSON collections and then provides a simple API for creating, reading, updating, and deleting documents within those collections.
With Mongoose, you can define your schema using the mongoose.Schema constructor. You can specify the structure of the document, including the fields and their data types, as well as any custom validation or middleware functions.
Once the schema is defined, you can use it to create a model using the mongoose.model method. This model can be used to perform CRUD (Create, Read, Update, Delete) operations on documents within a collection. For example, you can use the .create method to insert a new document into a collection, the .find method to retrieve documents that match certain criteria, the .update method to modify documents, and the .remove method to delete documents.
Overall, Mongoose provides a convenient way to interact with MongoDB collections and ensures that the data stored in the collection is consistent and adheres to the defined schema.
 
There are several ways to handle asynchronous code in JavaScript:
1.	Callbacks: This is a basic technique to handle asynchronous code where you pass a callback function as an argument to the asynchronous operation that will be called once the operation is complete.
2.	Promises: Promises are a more advanced way to handle asynchronous code that represent a value that may not be available yet. Promises provide a standard API for registering callbacks, composing async operations and handling errors.
3.	Async/await: This is a more recent and convenient way to handle asynchronous code in JavaScript. With async/await, you can write asynchronous code that looks and behaves like synchronous code, making it easier to read and write.
4.	Event Loop: JavaScript has a single-threaded event loop that handles all asynchronous code. You can leverage the event loop by using APIs like setTimeout, setInterval, or process.nextTick to schedule a function to be called at a later time.
Overall, the choice of technique depends on the use case and personal preference, but the use of Promises and async/await are becoming increasingly popular due to their ease of use and readability.
Here's an example of how you can use Mongoose with asynchronous code to perform basic CRUD operations on a collection:

In this example, we connect to a MongoDB database, 
define a schema for the collection, 
compile it into a model, 
and then use the model to perform CRUD operations on the collection using asynchronous functions. 
The asynchronous functions use await to wait for the promises returned by Mongoose methods to resolve before moving on to the next operation.
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true });

// Define the schema for the collection
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Compile the schema into a model
const User = mongoose.model('User', userSchema);

// Create a new user document
async function createUser() {
  const user = new User({ name: 'John Doe', age: 30 });
  await user.save();
  console.log(`User created: ${user}`);
}

// Find all user documents
async function findUsers() {
  const users = await User.find({});
  console.log(`Users found: ${users}`);
}

// Update a user document
async function updateUser() {
  const user = await User.findOne({ name: 'John Doe' });
  user.age = 31;
  await user.save();
  console.log(`User updated: ${user}`);
}

// Remove a user document
async function removeUser() {
  await User.remove({ name: 'John Doe' });
  console.log('User removed');
}

// Call the functions
createUser();
findUsers();
updateUser();
removeUser(); 
