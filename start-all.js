const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(path.join(__dirname, 'server-logs.txt'), { flags: 'w' });

console.log("Starting Backend on port 5000...");
const backend = spawn('node', ['index.js'], {
    cwd: path.join(__dirname, 'backend'),
    shell: true,
    stdio: 'pipe'
});

backend.stdout.pipe(logStream);
backend.stderr.pipe(logStream);

console.log("Starting Frontend Vite Server on port 5173...");
const frontend = spawn('npx', ['vite', '--force', '--host'], {
    cwd: path.join(__dirname, 'frontend'),
    shell: true,
    stdio: 'pipe'
});

frontend.stdout.pipe(logStream);
frontend.stderr.pipe(logStream);

console.log("\n=============================================");
console.log("✅ Servers are starting up implicitly!");
console.log("Backend: http://localhost:5000");
console.log("Frontend: http://localhost:5173");
console.log("You can view logs in server-logs.txt");
console.log("=============================================\n");

// Keep script alive indefinitely
setInterval(() => { }, 1000 * 60 * 60);

// Handle exit cleanly
process.on('SIGINT', () => {
    backend.kill();
    frontend.kill();
    process.exit();
});
