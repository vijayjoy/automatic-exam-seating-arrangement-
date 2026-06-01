const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, 'backend', 'database.sqlite');
const db = new Database(dbPath, { verbose: console.log });

console.log('Querying admins table...');
const admins = db.prepare('SELECT * FROM admins').all();
console.log(JSON.stringify(admins, null, 2));

console.log('Querying students length...');
const students = db.prepare('SELECT COUNT(*) as count FROM students').get();
console.log(students);
