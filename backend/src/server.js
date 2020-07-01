const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const server = require('http').Server(app);

const io = require('socket.io')(server);

// Separa as salas
io.on('connection', (socket) => {
  socket.on('connectRoom', (box) => {
    socket.join(box);
  });
});

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.fnhdx.mongodb.net/omni06?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Middleware global
app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));

server.listen(3333);
