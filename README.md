# Innrly Production Deployment Guide

This directory contains the production-ready build files for the Innrly project. These files are ready to be uploaded to your Windows Server to go live.

## Directory Structure

* **`database/`**: Contains the MySQL database schemas and seed data to restore/setup your production database.
* **`backend/`**: The FastAPI Python application that acts as your database API and backend.
* **`frontend/`**: The compiled TanStack Start (React/Vite) SSR web application.

---

## 1. Database Setup (MySQL)

You need a running MySQL instance (such as inside Wampserver, XAMPP, or a standalone MySQL installation).

1. Log in to phpMyAdmin (or your preferred MySQL client) on your Windows Server.
2. Create a new database named `innrly_leads`.
3. Import the SQL files located in the `database/` folder:
   * First, import `blog_categories.sql`
   * Second, import `blogs.sql`
4. Make sure the database user has correct privileges to read/write this database.

---

## 2. Backend Setup (Python FastAPI)

The backend is built with FastAPI.

1. **Install Python**: Ensure Python 3.10 or higher is installed on your Windows Server and added to the System Path.
2. **Install Dependencies**:
   Open PowerShell/CMD in the `backend/` directory and run:
   ```bash
   pip install -r requirements.txt
   ```
3. **Database Configuration**:
   Open `backend/app.py` and modify the `DB_CONFIG` block to match your server's MySQL credentials:
   ```python
   DB_CONFIG = {
       "host": "127.0.0.1",       # Production database host
       "user": "root",            # Production database username
       "password": "yourpassword",# Production database password
       "database": "innrly_leads",
       "port": 3306
   }
   ```
4. **Environment Variables**:
   Specify production credentials as system environment variables:
   * `ADMIN_USERNAME`: Admin login username
   * `ADMIN_PASSWORD`: Admin login password
   * `ADMIN_TOKEN`: Secret administrative session token
   * `VITE_LEAD_WEBHOOK_URL`: Your production lead webhook URL
5. **Run Server**:
   You can start the server manually for testing:
   ```bash
   python app.py
   ```
   For production, it is recommended to run this as a Windows Service using a tool like **NSSM (Non-Sucking Service Manager)**:
   * Command: `python app.py`
   * Directory: `C:\path-to-your-deployment\backend`

---

## 3. Frontend Setup (React / TanStack Start)

The frontend is compiled for server-side rendering (SSR) using Nitro. It must run on Node.js.

1. **Install Node.js**: Ensure Node.js (v18 or higher recommended) is installed on the Windows Server.
2. **Run Server**:
   Open PowerShell/CMD in the `frontend/` directory and run:
   ```bash
   node server/server.js
   ```
   This will start the web server listening on port `3000` (or the port defined by the `PORT` environment variable).
3. **IIS Reverse Proxy Setup (Optional but Recommended)**:
   If you want to host it on port 80/443 using IIS:
   * Install IIS and the **Application Request Routing (ARR)** and **URL Rewrite** extensions.
   * Enable proxying in ARR.
   * Set up a URL Rewrite rule to reverse proxy incoming requests from `http://yourdomain.com` to `http://localhost:3000`.
   * Do the same for the Python backend API (proxy `/leads`, `/integrations`, `/upload`, etc. from the main domain to `http://localhost:8000`).

---

## 4. Production Service Management (Continuous Running & Auto-Restart)

To ensure both the Node.js frontend and Python FastAPI backend run continuously, start automatically when the server boots, and recover from crashes/system restarts, use the Windows Task Scheduler.

### Step 1: Create a Startup Batch File
Create a startup batch file named `start_innrly.bat` (e.g., in `C:\inetpub\wwwroot\`) containing:
```bat
@echo off
:: Start Python Backend
cd C:\inetpub\wwwroot\innrly-new\backend
start "" python app.py

:: Start Node Frontend
cd C:\inetpub\wwwroot\innrly-new\frontend
start "" node run-server.mjs
```

### Step 2: Configure Windows Task Scheduler
1. Search for and open **Task Scheduler** in the Windows Start menu.
2. Click **Create Basic Task...** on the right panel.
3. Set the **Name** to: `Start Innrly Servers`.
4. Set the **Trigger** to: **When the computer starts**.
5. Set the **Action** to: **Start a program** and browse to select your `start_innrly.bat` file.
6. Once created, open the **Properties** of the task:
   - Check **Run whether user is logged on or not**.
   - Check **Run with highest privileges**.
   - Under the **Settings** tab, make sure *“If the running task does not end when requested, force it to stop”* is **unchecked** so that the processes run indefinitely.

