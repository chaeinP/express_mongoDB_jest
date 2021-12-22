const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://user:password@jestpractice.9ccqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  } catch (err) {
    console.error('Error', err);
  }
}

module.exports = {connect};
