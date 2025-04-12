# 🛍️ Shopping Website Using React + Fake Store API

This project is a front-end internship assignment designed to demonstrate core skills in React, API integration, responsive design, and state management using Context API. It is a complete shopping website that connects to [Fake Store API](https://fakestoreapi.com/docs) and mimics a real-world e-commerce experience.

---

## 📸 Screenshots

> *(Add your screenshots here — Home, Product Details, Cart, Login, etc.)*

---

## 🚀 Live Demo

🔗 [Live Site URL](https://product-store-mauve-omega.vercel.app/)

### Credentials for Testing (from Fake Store API)
- username: johnd
- password: m38rmF$

---

## 🧑‍💻 Features

### 🔐 Login Page
- Login form with username & password fields.
- Authenticates using `/auth/login` from Fake Store API.
- JWT token is stored in `localStorage`.
- Redirects to Product Listing page on successful login.

### 🏠 Product Listing (Home)
- Fetches and displays all products from `/products`.
- Responsive grid layout.


### 📦 Product Detail Page
- Shows full details of selected product: image, title, description, price.
- "Add to Cart" functionality with quantity management.

### 🛒 Cart Page
- Displays all items added to cart.
- Allows removing products or updating their quantity.
- Displays total price (auto-updated).
- Checkout button clears the cart.

### 🔝 Navigation/Header
- Navigation links: `Home | Cart | Logout`.
- Shows current cart item count.
- Logout clears token and redirects to Login.

---

## ⚙️ Tech Stack

- **React.js** (Vite)
- **React Router v6**
- **React Hooks**
- **Context API**
- **Tailwind CSS**
- **Mobile-first Responsive Design**
- **Fake Store API**

---

