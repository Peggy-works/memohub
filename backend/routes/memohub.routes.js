const express = require('express');
const router = express.Router();
const pool = require('../db/connect');

router.get('/getUser', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT userid, name, email, password FROM user where name = ?', ['Angel']); 
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
})

router.post('/updateWater', async (req, res) => {
    try {
        console.log(req.body);
        const [rows] = await pool.query('SELECT waterid, idnumber, totalWater, dateAdded FROM water');
        if (!rows)
            //If empty insert row
            res.json(rows);
        
        //Row has already been created, UPDATE values rather than INSERT
        res.json("empty rows")
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
})

module.exports = router;
'sqlserver://localhost:3306;user=root;'