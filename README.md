<div align="center">

# 📝 MERN Blog Platform

A production-ready **Full Stack Blogging Platform** built with the **MERN Stack** that enables users to securely create, manage, and interact with blog posts. The application follows modern software engineering principles, including RESTful APIs, JWT authentication, modular architecture, and responsive UI.

**React.js • Node.js • Express.js • MongoDB • JWT • Mongoose**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)
![Express](https://img.shields.io/badge/Express.js-Framework-lightgrey)

</div>

---

# 📖 Overview

The **MERN Blog Platform** is a full-stack web application designed to demonstrate industry-standard software development practices using the MERN stack.

Users can securely register, authenticate, create blog posts, update or delete their own content, and engage with other users through comments. The backend is built using a modular MVC architecture with RESTful APIs, while the frontend provides a responsive and intuitive user experience.

This project showcases practical experience with authentication, authorization, database management, API development, frontend-backend integration, and deployment-ready application design.

---

# ✨ Features

### 👤 Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization Ready

---

### 📝 Blog Management

- Create Blog
- View Blogs
- Edit Blog
- Delete Blog
- View Single Blog
- Rich Blog Details

---

### 💬 Comment System

- Add Comments
- View Comments
- Delete Own Comments
- User Interaction

---

### 🔒 Security

- JWT Authentication
- Password Encryption
- Protected API Routes
- Input Validation
- Error Handling
- Secure Environment Variables

---

### ⚙️ Backend

- RESTful APIs
- MVC Architecture
- MongoDB Integration
- Modular Folder Structure
- Centralized Error Handling

---

### 🎨 Frontend

- Responsive UI
- React Router
- Axios API Integration
- Loading States
- Protected Pages

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JSON Web Token (JWT)
- bcrypt.js

## Development Tools

- Git
- GitHub
- VS Code
- Postman

---

# 📂 Project Structure

```
MERN-Blog-Platform
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── context
│   │   └── assets
│   │
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── validators
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/manshirai09/Thiranex-Blog-Platform.git
```

## Navigate to Project

```bash
cd Thiranex-Blog-Platform
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 📌 REST API Overview

## Authentication

```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

---

## Blogs

```
GET    /api/blogs
GET    /api/blogs/:id
POST   /api/blogs
PUT    /api/blogs/:id
DELETE /api/blogs/:id
```

---

## Comments

```
POST   /api/comments
GET    /api/comments/:blogId
DELETE /api/comments/:id
```

---

# 🔐 Security Features

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Authentication Middleware
- Input Validation
- Environment Variables
- Error Handling Middleware

---

# 📈 Future Improvements

- Rich Text Editor
- Blog Categories
- Tags
- Like & Bookmark System
- User Profiles
- Image Upload (Cloudinary)
- Search & Filters
- Pagination
- Email Verification
- Password Reset
- Admin Dashboard
- Dark Mode
- Notifications

---

# 📷 Screenshots

> Add screenshots after completing the project.

- Home Page
- Login Page
- Dashboard
- Blog Details
- Create Blog
- Profile
- Comments

---

# 🌐 Deployment

Frontend: **Vercel**

Backend: **Render**

Database: **MongoDB Atlas**

---

# 👩‍💻 Author

**Manshi Rai**

🎓 B.Tech CSE Student

🔗 GitHub: https://github.com/manshirai09

💼 LinkedIn: *https://www.linkedin.com/in/manshi-rai09/*

---

# 📄 License

This project is developed for learning, portfolio, and internship purposes.

---

<div align="center">

⭐ If you found this project helpful, consider giving it a Star on GitHub!

</div>
