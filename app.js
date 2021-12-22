const express = require('express');
const app = express();
const mongodb = require('./mongodb/mongodb.connect');

const todoRoutes = require('./routes/todo.routes');
mongodb.connect();
app.use(express.json());
app.use('/todos', todoRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
});
module.exports = app;
