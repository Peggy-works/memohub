const memoRoutes = require('./routes/memohub.routes.js'); 
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors()); 
app.use('/api', memoRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})