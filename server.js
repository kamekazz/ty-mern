require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const usersRoutes = require('./routes/users');
const profileRoutes = require('./routes/profile');
const postsRoutes = require('./routes/posts');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log(`mongodb connected`))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello'));

app.use('/api/users', usersRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postsRoutes);

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
