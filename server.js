const express = require('express');
const app = express();

const server = app.listen(3000, function() {
	console.log('Listen http://localhost:3000');
});


app.get('/', function(req, res) {
	console.log('GET request received')
	res.send('Hello GET!');
});

app.post('/', function (req, res) {
    console.log('POST request received');
    res.send('Hello POST!');
});

app.delete('/', function (req, res) {
    console.log('DELETE request received');
    res.send('Hello DELETE!');
});

app.get('/list_user', function (req, res) {
    console.log('GET request received (users list)');
    res.send('List of users');
});

app.get('/ab*cd', function(req, res) {
    console.log('GET request received from ab*cd');
    res.send('It works fine');
});
