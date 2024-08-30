import dotenv from 'dotenv';

dotenv.config();

console.log('DB_URL:', process.env.DB_URL);
console.log('DB_NAME:', process.env.DB_NAME);
