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

/*

INSERT INTO `Water` (`idnumber`, `totalWater`, `dateAdded`) VALUES 
(2, 4, `2024-09-24`)

*/

router.post('/updateWater', async (req, res) => {
    try {
        let missingFields = []
        const { waterAmt, userId } = req.body;

        // Handle post request missing fields/params
        if(!waterAmt) missingFields.push("waterAmt");
        if(!userId) missingFields.push("userId"); 
        if(missingFields.length) 
            return res.status(400).json({
                error: "Bad Request",
                message: `Missing parameters: ${missingFields.join(', ')}` 
            }); 
        
        const [rows] = await pool.query('SELECT waterid, idnumber, totalWater, dateAdded FROM water'); 

        // If no row, insert row and return
        if (!rows.length){ 
            const [returnedRows] = await pool.query('INSERT INTO `Water` (`idnumber`, `totalWater`, `dateAdded`) VALUES (?, ?, ?)', [2, 4, '2024-09-24']);
            return res.json(returnedRows);
        }
        
        // If row exists just update row field
        const [[{ totalWater }]] = await pool.query('SELECT totalWater FROM water WHERE `dateAdded` = ? LIMIT 1', ['2024-09-24']);   
        const [result, fields] = await pool.query('UPDATE `water` SET `totalWater` = ? WHERE `dateAdded` = ? LIMIT 1', [totalWater + waterAmt, '2024-09-24']);
        const [waterAmount2] = await pool.query('SELECT totalWater FROM water WHERE `dateAdded` = ? LIMIT 1', ['2024-09-24']);
        //Row has already been created, UPDATE values rather than INSERT
        res.json({waterAmount2, ...req.body});
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
})

module.exports = router;
//'sqlserver://localhost:3306;user=root;'