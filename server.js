const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const scoreboard = require('./controllers/scoreboard');
const history = require('./controllers/history');
const imagedb = require('./controllers/imagedb');


const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'incudy',
    database : 'test'
  }
});

/* 
const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  }
});
*/




const app = express();


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { res.send('working') })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.get('/score', (req, res) => { scoreboard.showScoreboard(db, req, res) })
app.get('/history', (req, res) => { history.showImageHistory(db, req, res) })
app.put('/imagedb', (req, res) => { imagedb.sendImage(db, req, res) })
 

app.listen(process.env.PORT || 3001, () => {
	console.log('app is running');
})



/* {
/// Package.json

{
  "name": "projektkacper-api",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "knex": "^0.17.6",
    "pg": "^7.11.0"
  }
}


 */