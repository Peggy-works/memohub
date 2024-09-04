const memoRoutes = require('./routes/memohub.routes.js'); 
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use('/api', memoRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})