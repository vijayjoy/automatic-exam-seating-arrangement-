@echo off
echo Starting Exam Seating System Servers...

:: Start Backend
echo Starting Backend on port 5000 (0.0.0.0)...
cd backend
start cmd /k "node index.js"
cd ..

:: Wait 2 seconds
timeout /t 2 /nobreak > NUL

:: Start Frontend 
echo Starting Frontend on port 5173 (127.0.0.1)...
cd frontend
start cmd /k "npm run dev"
cd ..

echo.
echo ========================================================
echo SUCCESS: Both servers are starting in separate windows!
echo Please wait a moment, then open http://127.0.0.1:5173/
echo ========================================================
pause
