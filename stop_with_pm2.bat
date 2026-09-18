@echo off
echo Stopping Innrly Processes...
cd /d "%~dp0"
pm2 stop ecosystem.config.cjs
echo.
pm2 list
echo.
pause
