# 🛒 ShopKart – Online Shopping Website

ShopKart is a full-stack online shopping website developed using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**. It provides a simple e-commerce experience where users can browse products, view product details, add products to the cart, and place orders.

## 🚀 Features

* 🏠 Attractive home page
* 🔍 Product search
* 📂 Category-based product filtering
* 🛍️ Product listing
* 📱 Product details page
* 🛒 Add to Cart
* ➕ Increase/decrease product quantity
* ❌ Remove products from cart
* 💳 Checkout page
* 📦 Place orders
* 🗄️ Store products and orders in MongoDB
* 📱 Responsive design

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## 📁 Project Structure

```text
ShopKart
│
├── server.js
├── package.json
│
├── models
│   ├── Product.js
│   └── Order.js
│
└── public
    ├── index.html
    ├── products.html
    ├── product.html
    ├── cart.html
    ├── checkout.html
    ├── style.css
    └── script.js
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ShopKart.git
```

### 2. Open the project

```bash
cd ShopKart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running on your system.

The project uses:

```text
mongodb://127.0.0.1:27017/shopkart
```

### 5. Start the server

```bash
node server.js
```

For development using Nodemon:

```bash
npm run dev
```

### 6. Open in browser

```text
http://localhost:3000
```

## 🛍️ Shopping Flow

```text
Home Page
    ↓
Browse/Search Products
    ↓
Product Details
    ↓
Add to Cart / Buy Now
    ↓
Cart
    ↓
Checkout
    ↓
Place Order
    ↓
MongoDB
```

## 🗄️ Database

The project uses MongoDB with two main collections:

### Product

Stores:

* Product name
* Category
* Price
* Original price
* Discount
* Rating
* Reviews
* Image
* Description

### Order

Stores:

* Customer information
* Ordered products
* Quantity
* Total amount
* Payment method
* Order status
* Order date

## 📸 Screenshots

Add your project screenshots here:



![Home Page](screenshots/home.png)
<img width="1487" height="921" alt="image" src="https://github.com/user-attachments/assets/60bd33dd-f847-49e8-a824-ea77d3efc2fc" />


![Product Details](screenshots/product.png)
<img width="901" height="719" alt="image" src="https://github.com/user-attachments/assets/0a3cf743-db2d-464f-b95c-7d3df0530856" />


![Cart](screenshots/cart.png)
<img width="877" height="470" alt="image" src="https://github.com/user-attachments/assets/20be543e-d8a3-48e7-9a92-85583b804411" />


![Checkout](screenshots/checkout.png)
<img width="492" height="297" alt="image" src="https://github.com/user-attachments/assets/538a0c22-916e-4459-b4a4-0ee551e12dc2" />

## 🎯 Project Objective

The main objective of ShopKart is to develop a user-friendly online shopping platform that demonstrates the integration of **frontend, backend, REST APIs, and MongoDB** in a full-stack web application.

## 🔮 Future Enhancements

* User registration and login
* Admin dashboard
* Real payment gateway
* Order tracking
* Wishlist
* Product reviews
* Product image upload
* User order history

## 👩‍💻 Author

**Kashish Verma**

MCA | Full-Stack Development & Cloud Computing

## 📄 License

This project is created for **educational and academic purposes**.
