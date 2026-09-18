const path = require('path');

module.exports = {
  apps: [
    {
      name: "innrly-frontend",
      cwd: path.join(__dirname, "frontend"),
      script: "run-server.mjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G", // Automatically restarts if memory exceeds 1GB
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        BACKEND_URL: "http://127.0.0.1:8000"
      },
      error_file: path.join(__dirname, "backend", "logs", "frontend_pm2_error.log"),
      out_file: path.join(__dirname, "backend", "logs", "frontend_pm2_out.log"),
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      time: true
    },
    {
      name: "innrly-backend",
      cwd: path.join(__dirname, "backend"),
      script: "app.py",
      interpreter: "python", // Uses system Python interpreter
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G", // Automatically restarts if Python leaks memory
      env: {
        PORT: 8000
      },
      error_file: path.join(__dirname, "backend", "logs", "backend_pm2_error.log"),
      out_file: path.join(__dirname, "backend", "logs", "backend_pm2_out.log"),
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      time: true
    }
  ]
};
