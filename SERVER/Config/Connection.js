import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

let db = null;

export default {
    connect: (callback) => {
        const url = process.env.DB_URL;
        const dbname = process.env.DB_NAME;

        // Additional logging for debugging
        console.log('Attempting to connect to MongoDB...');
        console.log('Connection String:', url);
        console.log('Database Name:', dbname);

        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) {
                console.error('Failed to connect to the database. Error:', err);
                return callback(err);
            }
            db = client.db(dbname);
            console.log(`Connected to database: ${dbname}`);
            callback(null, db);
        });
    },
    get: () => {
        if (!db) {
            throw new Error('Database not initialized. Call connect first.');
        }
        return db;
    }
};
