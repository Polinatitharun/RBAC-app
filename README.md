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
