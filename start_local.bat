@echo off
title Innrly - Local Runner
echo ====================================================
echo Starting Innrly Local Development Environment...
echo ====================================================

:: Check if MariaDB/MySQL is running on port 3307 or 3306
netstat -ano | findstr /R ":3307.*LISTENING :3306.*LISTENING" >nul
if %errorlevel% neq 0 (
    echo Starting MariaDB Server...
    if exist "C:\wamp64\bin\mariadb\mariadb11.4.9\bin\mysqld.exe" (
        start "MariaDB Server" /min "C:\wamp64\bin\mariadb\mariadb11.4.9\bin\mysqld.exe" --defaults-file="C:\wamp64\bin\mariadb\mariadb11.4.9\my.ini" --console
        timeout /t 2 /nobreak >nul
    ) else (
        echo [WARNING] Please ensure WAMP MySQL/MariaDB server is running.
    )
) else (
    echo Database server is already running.
)

:: Start Backend
echo Starting Python FastAPI Backend on http://127.0.0.1:8005...
cd /d "%~dp0backend"
start "Innrly Backend (FastAPI)" cmd /k "python app.py"

:: Start Frontend
echo Starting Frontend SSR Server on http://localhost:3000...
cd /d "%~dp0frontend"
start "Innrly Frontend (SSR)" cmd /k "node run-server.mjs"

:: Give servers a moment to initialize
timeout /t 2 /nobreak >nul

:: Open browser
echo Opening http://localhost:3000 in default browser...
start http://localhost:3000

echo.
echo ====================================================
echo Innrly is now running!
echo - Frontend: http://localhost:3000
echo - Backend API & Docs: http://127.0.0.1:8005/docs
echo ====================================================
timeout /t 5
