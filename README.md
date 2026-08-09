# UrbanBasket
UrbanBasket is a full-stack e-commerce application with separate frontend applications for customers and administrators, powered by a shared backend server.

## What's inside?

### Applications

* `client`: React + Vite application for customers
* `admin`: React + Vite application for administrators
* `server`: Node.js + Express backend shared by both applications

### Client

The customer-facing application includes:

* Home page with latest collections
* Product listing and filtering
* Categories for Men, Women and Kids
* Top Wear, Bottom Wear and Winter Wear
* Shopping cart
* Checkout
* Stripe, Razorpay and Cash on Delivery
* Order history
* Order status tracking
* Contact Us

### Admin

The admin application provides:

* Admin authentication
* Add products
* List products
* Product image uploads
* View customer orders
* Update order status

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Services

* Clerk — Authentication
* Inngest — User synchronization and background tasks
* Cloudinary — Image uploads
* Stripe — Payments
* Razorpay — Payments

## Architecture

```text
UrbanBasket
│
├── client/          # Customer frontend
├── admin/           # Admin frontend
└── server/          # Shared backend
```

Both frontends communicate with the same backend server.

```text
        Client
          │
          │
          ▼
       Server
          │
    ┌─────┼─────┐
    │     │     │
    ▼     ▼     ▼
 MongoDB Clerk Cloudinary
          │
       Inngest
          │
     ┌────┴────┐
     ▼         ▼
  Stripe    Razorpay

          ▲
          │
        Admin
```

## Authentication

Authentication is handled using **Clerk**.

User creation, updates and deletion are synchronized with our MongoDB database using **Inngest**.

```text
Clerk → Inngest → MongoDB
```

## Backend

The `server` application provides APIs for both the client and admin applications.

It contains:

* Routes
* Controllers
* Models
* Middleware
* Admin authorization
* User authorization
* Payment handling
* Product management
* Cart management
* Order management
* Clerk integration
* Inngest integration
* Cloudinary integration

## Installation

Clone the repository:

```sh
git clone <repository-url>
cd UrbanBasket
```

Install dependencies for each application:

```sh
cd client
npm install
```

```sh
cd ../admin
npm install
```

```sh
cd ../server
npm install
```

Create the required `.env` files and configure:

```text
MongoDB
Clerk
Inngest
Cloudinary
Stripe
Razorpay
```

## Development

Run the backend:

```sh
cd server
npm run dev
```

Run the client:

```sh
cd client
npm run dev
```

Run the admin dashboard:

```sh
cd admin
npm run dev
```

All three applications run independently during development, while `client` and `admin` communicate with the same `server`.

## Project Flow

```text
Customer
   │
   ▼
Browse Products
   │
   ▼
Add to Cart
   │
   ▼
Checkout
   │
   ▼
Payment
   │
   ▼
Order Created
   │
   ▼
Admin Updates Order
   │
   ▼
Customer Tracks Order
```

## Useful Links

* [Clerk](https://clerk.com/)
* [Inngest](https://www.inngest.com/)
* [MongoDB](https://www.mongodb.com/)
* [Cloudinary](https://cloudinary.com/)
* [Stripe](https://stripe.com/)
* [Razorpay](https://razorpay.com/)
