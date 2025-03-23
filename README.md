# Faceproj Setup Instructions

## Prerequisite: Install Caddy (skip if already done)

Before running the above commands, ensure that **Caddy** is installed on your system. You can install it using the following link:

[Caddy Installation](https://webinstall.dev/caddy/)

> **Important:** Close all Terminal windows after installing Caddy, then reopen them to execute the commands listed below in new, fresh windows.

To run the project, you will need to open two Terminal windows and follow these steps:

## 1. Frontend Setup

In the first Terminal window:

1. **Navigate to the project directory:**
    ```bash
    cd /faceproj
    ```

2. **Install the dependencies (skip if already done):**
    ```bash
    npm install
    ```

3. **Start the Next.js frontend:**
    ```bash
    npm run devhttps
    ```

## 2. Backend Setup

In the second Terminal window:

1. **Navigate to the server directory:**
    ```bash
    cd /faceproj
    cd server
    ```

2. **Set up the Python environment (skip if already done):**
    ```bash
    python3 setup.py
    ```

    You may have to enter your password to allow Caddy to set up some local certificates etc. on your system.

3. **Start the Python backend:**
    ```bash
    python3 server.py
    ```
