import dbConnection from './Connection.js';

dbConnection.connect((err, db) => {
    if (err) {
        console.error('Connection failed:', err);
    } else {
        console.log('Connection successful:', db);
        // You can perform further operations with `db` here if needed
    }
});
