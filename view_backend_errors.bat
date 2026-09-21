@echo off
echo ===================================================
echo 1. Checking PM2 Process List:
echo ===================================================
pm2 list

echo.
echo ===================================================
echo 2. Last 30 Errors from Backend (innrly-backend):
echo ===================================================
pm2 logs innrly-backend --lines 30 --err --nostream

echo.
echo ===================================================
echo 3. Checking Port 8005 and Port 3000 Status:
echo ===================================================
netstat -ano | findstr :8005
netstat -ano | findstr :3000

echo.
echo ===================================================
pause
