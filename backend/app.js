const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors()); 

mongoose.connect('mongodb://localhost:27017/Student_Data')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
