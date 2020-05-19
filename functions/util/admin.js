const admin = require('firebase-admin');
var serviceAccount = require('../Key/todoapp-68594-firebase-adminsdk-h6ool-caded288a8.json');

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL : "https://todoapp-68594.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };