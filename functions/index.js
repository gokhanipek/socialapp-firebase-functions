const functions = require('firebase-functions');
const app = require('express')();

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login } = require('./handlers/users');
const FBAuth = require('./util/fbauth');

//scream routes
app.get('/screams', getAllScreams );
app.post( '/scream', FBAuth, postOneScream);

//users route
app.post('/signup', signup)
app.post('/login', login)




exports.api = functions.region('europe-west1').https.onRequest(app);