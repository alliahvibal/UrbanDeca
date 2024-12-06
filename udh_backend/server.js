
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectsRouter = require('./routes/projects');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/urban_deca', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/api/projects', projectsRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});