const express = require('express');
const router = express.Router();
const pool = require('../db/connect');

router.get('/getUser', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT name, email, password FROM user where name = ?', ['Angel']); 
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
})

module.exports = router;
'sqlserver://localhost:3306;user=root;'