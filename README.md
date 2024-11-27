# RBAC-app
# Role-Based Access Control (RBAC) Implementation

## **Project Overview**

This project implements a full-stack application demonstrating **Role-Based Access Control (RBAC)** with secure **Authentication** and **Authorization**. The system allows users to register, log in, and perform actions based on their roles (e.g., Admin, User, Moderator). 

Key functionalities:
- Secure Authentication using **JWT**.
- Authorization with RBAC for restricted access.
- Backend APIs built with **Node.js** and **Express**.
- Frontend built with **React.js**.
- Database managed using **MongoDB**.
- Password security using **bcrypt**.

---

## **Features**

1. **User Registration and Login**:
   - Passwords are hashed before storage.
   - JWT tokens are issued for secure session management.

2. **Role-Based Access Control**:
   - Admin, User, and Moderator roles.
   - Specific endpoints accessible based on roles.

3. **Secure API Endpoints**:
   - Middleware to validate tokens and enforce RBAC policies.

4. **Frontend**:
   - Responsive UI built with React.js.
   - Pages for Registration, Login, Dashboard, and Admin Panel.

---

## **Technologies Used**

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **State Management**: Context API
- **Deployment**: (Add deployment details if hosted)

---

## **Installation and Setup**

Follow these steps to set up the project locally:

### **Backend Setup**
1. Navigate to the `backend` directory:
   ```bash
   cd backend


install dependencies:
npm install
Set up environment variables:

Create a .env file in the backend directory.
Add the following variables:
env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start the server:

npm start

The backend will run at http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:


cd frontend
Install dependencies:

npm install
Start the frontend application:


npm start
The frontend will run at http://localhost:3000.

Usage
Open the application in your browser:

Frontend: http://localhost:3000
Backend API: http://localhost:5000/api
Register a new user or log in with existing credentials.

Based on the assigned role, access different parts of the application:

Admin: Access the admin panel to manage roles and permissions.
User: Access general user resources.


Project Structure
Backend

backend/
├── controllers/
│   ├── authController.js
│   ├── userController.js
├── models/
│   ├── User.js
│   ├── Role.js
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
├── middlewares/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
├── server.js
└── .env



Frontend

frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── AdminPanel.jsx
│   ├── App.js
│   ├── index.js
└── .env


API Documentation


Authentication Endpoints
Register: POST /api/auth/register

Request Body:


{
  "username": "example",
  "password": "password123",
  "role": "User"
}
Response:

{
  "message": "User registered successfully"
}
Login: POST /api/auth/login

Request Body:

{
  "username": "example",
  "password": "password123"
}
Response:

{
  "token": "jwt_token_here"
}
Role-Based Endpoints
Access Admin Resource: GET /api/admin/resource

Headers: Authorization: Bearer <token>
Response:

{
  "message": "Admin resource accessed"
}
Access User Resource: GET /api/user/resource

Headers: Authorization: Bearer <token>
Response:

{
  "message": "User resource accessed"
}

