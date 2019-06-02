const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mitrais_test'
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

//console.log(connection);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('go to /users to see users');
});

// app.get('/users/add', (req, res) => {
//     console.log(req.query);
//     const { firstName, lastName, mobileNumber, email, dob, gender } = req.query;
//     const INSERT_USERS_QUERY = `INSERT INTO users (first_name, last_name, mobile_number, email, dob, gender) VALUES('${firstName}', '${lastName}', ${mobileNumber}, '${email}', '${dob}',' ${gender}')`;
//     connection.query(INSERT_USERS_QUERY, (err, results) => {
//         if (err) {
//             return res.send(err)
//         } else {
//             return res.send('successfully added user');
//         }
//     });
// });

app.post('/users/add', function (req, res) {
    const { firstName, lastName, mobileNumber, email, dob, gender } = req.query;

    const INSERT_USERS_QUERY = `INSERT INTO users (firstName, lastName, mobileNumber, email, dob, gender) VALUES('${firstName}', '${lastName}', '${mobileNumber}', '${email}', '${dob}','${gender}')`;
    connection.query(INSERT_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send('successfully added user');
        }
    });
});

app.get('/users', (req, res) => {
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
});




app.listen(4000, () => {
    console.log(`Mitrais server listening on port 4000`);
});