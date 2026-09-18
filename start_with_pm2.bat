@echo off
echo Starting Innrly Frontend and Backend with PM2...
cd /d "%~dp0"
pm2 start ecosystem.config.cjs
pm2 save
echo.
echo ==========================================
echo Current Process Status:
echo ==========================================
pm2 list
echo.
pause
