# ProShop v2

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). This is version 2 of the ProShop project, featuring a modern React frontend with Redux Toolkit for state management and an Express.js backend with MongoDB.

## 🚀 Features

### User Authentication & Authorization
- User registration and login
- JWT-based authentication with HTTP-only cookies
- Password hashing with bcrypt
- Protected routes for authenticated users
- User profile management
- Admin user management capabilities

### Product Management
- Display of product catalog on home page
- Individual product detail pages
- Product ratings and reviews display
- Stock management (in/out of stock status)
- Product search and filtering (planned)

### Shopping Cart
- Add products to cart from product pages
- Update item quantities in cart
- Remove items from cart
- Persistent cart state across sessions
- Cart item count display in header

### Checkout Process
- Multi-step checkout flow with progress indicators
- Shipping address collection
- Payment method selection (PayPal integration planned)
- Order summary and totals calculation

### Technical Features
- Responsive design with Bootstrap
- Toast notifications for user feedback
- Loading states and error handling
- Form validation
- RESTful API architecture
- RTK Query for API state management

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **RTK Query** - API data fetching and caching
- **React Bootstrap** - UI components
- **Axios** - HTTP client
- **React Toastify** - Notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - HTTP cookie parsing

### Development Tools
- **Concurrently** - Run multiple scripts simultaneously
- **Nodemon** - Auto-restart server during development
- **ESLint** - Code linting

## 📁 Project Structure

```
proShop-v2/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   ├── productController.js  # Product API logic
│   │   └── userController.js     # User API logic
│   ├── data/
│   │   ├── products.js           # Sample product data
│   │   └── users.js              # Sample user data
│   ├── middleware/
│   │   ├── asyncHandler.js       # Async error handling
│   │   ├── authMiddleware.js     # Authentication middleware
│   │   └── errorHandler.js       # Error handling middleware
│   ├── models/
│   │   ├── orderModel.js         # Order schema
│   │   ├── productModel.js       # Product schema
│   │   └── userModel.js          # User schema
│   ├── routes/
│   │   ├── productRoutes.js      # Product API routes
│   │   └── userRoutes.js         # User API routes
│   ├── utils/
│   │   └── generateToken.js      # JWT token generation
│   ├── seeder.js                 # Database seeding script
│   └── server.js                 # Main server file
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── assets/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CheckoutSteps.jsx    # Checkout progress
│   │   │   ├── Footer.jsx           # Site footer
│   │   │   ├── FormContainer.jsx    # Form wrapper
│   │   │   ├── Header.jsx           # Site header with nav
│   │   │   ├── Loader.jsx           # Loading spinner
│   │   │   ├── Message.jsx          # Alert messages
│   │   │   ├── PrivateRoute.jsx     # Protected routes
│   │   │   ├── Product.jsx          # Product card component
│   │   │   └── Rating.jsx           # Star rating display
│   │   ├── screens/
│   │   │   ├── CartScreen.jsx       # Shopping cart page
│   │   │   ├── HomeScreen.jsx       # Product listing page
│   │   │   ├── LoginScreen.jsx      # User login page
│   │   │   ├── PaymentScreen.jsx    # Payment method selection
│   │   │   ├── ProductScreen.jsx    # Individual product page
│   │   │   ├── RegisterScreen.jsx   # User registration page
│   │   │   └── ShippingScreen.jsx   # Shipping address form
│   │   ├── slices/
│   │   │   ├── apiSlice.js          # Base API configuration
│   │   │   ├── authSlice.js         # Authentication state
│   │   │   ├── cartSlice.js         # Shopping cart state
│   │   │   ├── productApiSlice.js   # Product API endpoints
│   │   │   └── userSlice.js         # User API endpoints
│   │   ├── utils/
│   │   │   └── cartUtils.js         # Cart utility functions
│   │   ├── App.js                   # Main app component
│   │   ├── constants.js             # API URL constants
│   │   ├── index.css                # Global styles
│   │   ├── index.js                 # App entry point
│   │   ├── reportWebVitals.js
│   │   └── store.js                 # Redux store configuration
│   └── package.json
├── package.json                     # Root package.json for scripts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/parth-nautiyal/proShop.git
   cd proShop-v2
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Set up environment variables**

   Create a `.env` file in the backend directory:
   ```env
   NODE_ENV=development
   PORT=3001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Seed the database with sample data**
   ```bash
   npm run data:import
   ```

6. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the backend server (http://localhost:3001) and frontend (http://localhost:3000) simultaneously.

### Available Scripts

- `npm start` - Start production server
- `npm run server` - Start backend server with nodemon
- `npm run client` - Start frontend development server
- `npm run dev` - Start both servers concurrently
- `npm run data:import` - Import sample data to database
- `npm run data:destroy` - Destroy all data in database

## 📡 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product by ID

### Users
- `POST /api/users` - Register new user
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID (admin only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

## 🔮 Future Enhancements

- Complete order placement and management
- PayPal payment integration
- Product search and filtering
- Product categories and brands
- User reviews and ratings
- Admin dashboard for order management
- Email notifications
- Image upload for products
- Wishlist functionality
- Product recommendations

## 📝 Notes

- Order functionality is partially implemented (models exist) but API endpoints are not yet created
- Payment integration with PayPal is planned but not implemented
- Admin features are available in the API but no frontend admin panel exists yet
- The application uses sample data that can be imported with the seeder script

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.