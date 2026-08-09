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

### DevOps

* Docker
* Nginx
* Docker Hub
* GitHub Actions

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

## Docker

All three applications are containerized using Docker.

```text
UrbanBasket
│
├── client  → Docker → Nginx
├── admin   → Docker → Nginx
└── server  → Docker → Node.js
```

The `client` and `admin` applications use multi-stage Docker builds to create optimized production images. Their Vite production builds are served using Nginx.

The backend runs in its own Node.js container.

Docker images are published to Docker Hub:

```text
Docker Hub
│
├── urbanbasket-client
├── urbanbasket-admin
└── urbanbasket-server
```

### Nginx

Nginx is used to serve the production builds of both frontend applications.

It is configured to support React Router by falling back to `index.html` for client-side routes.

## CI/CD

UrbanBasket uses **GitHub Actions** to automate the Docker image build and publishing process.

Whenever changes are pushed to the `main` branch:

```text
Git Push
   │
   ▼
GitHub Actions
   │
   ├── Build Client Image
   ├── Build Admin Image
   └── Build Server Image
   │
   ▼
Tag Images
   │
   ▼
Push to Docker Hub
```

Docker images are tagged using the **Git commit SHA**, allowing each image to be traced back to the exact version of the source code that produced it.

A `main` tag is also maintained as a reference to the latest successful build.

### GitHub Actions Workflow

The CI/CD workflow is located at:

```text
.github/
└── workflows/
    └── docker.yml
```

The workflow:

* Checks out the repository
* Authenticates with Docker Hub
* Sets up Docker Buildx
* Builds the client Docker image
* Builds the admin Docker image
* Builds the server Docker image
* Pushes the images to Docker Hub
* Tags images using the Git commit SHA

Frontend environment variables required by Vite are provided securely through **GitHub Actions Secrets** during the Docker build.

Server-side environment variables are kept separate from the Docker image and are managed by the deployment environment.

`.env` files are excluded from version control and are never committed to the repository.

## Installation

Clone the repository:

```sh
git clone https://github.com/AnisJshK/UrbanBasket.git
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
