# ✈️ SkyBook – Flight Booking Platform

A full-stack flight booking application that enables users to search flights, create accounts, securely log in, book flights, manage reservations, and view booking history through a modern and responsive user interface.

---

## 🌐 Live Demo

**Frontend:**  
https://skybook-flight-booking.vercel.app

**Backend API:**  
https://skybook-flight-booking-api.onrender.com

---

## 📂 GitHub Repository

https://github.com/Nishtha1311/skybook-flight-booking

---

# 🚀 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- CSS3
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- CORS

## Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

# ✨ Major Features

### 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Password Encryption using bcryptjs

---

### ✈️ Flight Management

- Search available flights
- View complete flight details
- Filter flights
- Responsive flight cards
- Dynamic flight listings

---

### 🎫 Booking System

- Book flights instantly
- Store bookings in MongoDB
- View booking history
- Booking confirmation
- Manage reservations

---

### 👤 User Dashboard

- Personalized user profile
- View booked flights
- Secure authentication
- Persistent login session

---

### 📡 REST APIs

- User Registration API
- Login API
- Authentication Middleware
- Flight APIs
- Booking APIs
- User Profile APIs

---

### 💾 Database

- MongoDB Atlas
- Mongoose Models
- Relationship between Users and Bookings
- Secure data storage

---

### 🎨 User Interface

- Fully Responsive Design
- Modern Flight Booking Layout
- Clean Navigation
- Mobile Friendly
- Attractive Landing Page

---

### ☁️ Deployment

- Frontend deployed on Vercel
- Backend deployed on Render
- MongoDB Atlas Cloud Database

---

# 📁 Project Structure

```
SkyBook
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── assets
│   └── api
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── controllers
│   └── server.js
│
└── README.md
```

---

# 🔑 Authentication Flow

1. User creates an account.
2. Password is encrypted using bcrypt.
3. JWT token is generated after login.
4. Token is stored securely.
5. Protected APIs verify JWT before granting access.

---

# 🛠 Installation

## Clone Repository

```bash
git clone https://github.com/Nishtha1311/skybook-flight-booking.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📚 What I Learned

- Building full-stack MERN applications
- Designing RESTful APIs
- JWT Authentication
- Password hashing using bcryptjs
- MongoDB schema design with Mongoose
- React state management
- API integration using Axios
- Route protection
- Deploying applications using Vercel and Render
- Working with MongoDB Atlas

---

# 🚀 Future Improvements

- Flight seat selection
- Online payment gateway integration
- Email booking confirmation
- Flight cancellation and refund
- Boarding pass generation
- Admin dashboard
- Flight schedule management
- Search and sorting enhancements

---

# 👩‍💻 Author

**Nishtha Vatsa**

GitHub:
https://github.com/Nishtha1311

LinkedIn:
https://www.linkedin.com/in/nishtha-vatsa
