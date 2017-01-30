var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'world'
});
connection.connect();

router.get('/', function (req, res, next) {
    connection.query('select Code, Name, Continent, StatusId from country', function(err, countries){
        if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: countries
            });
        });
});

router.get('/continent/:continent', function (req, res, next) {
    continent = req.params.continent;
    connection.query("select count(1) as count from country where Continent = '" + continent + "'", function(err, count){
        if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                count: count
            });
        });
});


module.exports = router;