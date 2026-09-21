@echo off
title Innrly - Stop Local Servers
echo Stopping Innrly processes (Node, Python, MariaDB)...

taskkill /F /FI "WINDOWTITLE eq Innrly Frontend*" /T >nul 2>&1
taskkill /F /FI "WINDOWTITLE eq Innrly Backend*" /T >nul 2>&1

:: Stop node process on port 3000
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1

:: Stop python process on port 8000
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":8000" ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1

echo All local Innrly servers have been stopped.
timeout /t 3
