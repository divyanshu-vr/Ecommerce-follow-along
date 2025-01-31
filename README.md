# Ecommerce-follow-along

**Detailed Project Description: E-commerce Website**  

This project is a comprehensive e-commerce platform designed to deliver a user-friendly and secure shopping experience. Built with a robust tech stack, it ensures scalability, performance, and ease of use for both customers and administrators.  

**Key Features:**  

1. **User Authentication System:**  
   - Secure registration and login using email, phone, or social accounts.  
   - Password hashing and encryption for secure storage.  

2. **Dynamic and Intuitive User Interface:**  
   - Home page showcasing featured and trending products.  
   - Separate pages for product categories, individual products, and user-specific actions like orders and wishlist.  

3. **Product Management:**  
   - Detailed product listings with high-quality images, descriptions, reviews, and ratings.  
   - Sorting and filtering options based on price, ratings, categories, etc.  

4. **Advanced Cart and Checkout System:**  
   - Persistent cart functionality linked to user profiles.  
   - Option to apply coupon codes and discounts.  

5. **Payment Gateway Integration:**  
   - Support for multiple payment options (credit/debit cards, UPI, net banking, wallets).  

6. **Order Management System:**  
   - Order tracking with real-time updates (e.g., processing, shipped, delivered).  
   - Easy returns and refunds with status tracking.  


**Tech Stack:**  
- **Frontend:** React.js and Tailwind CSS for a modern, responsive user interface.  
- **Backend:** Node.js with Express for robust server-side functionality.  
- **Database:** MongoDB for scalable and flexible data storage.  
- **Authentication:** Firebase for authentication users
- **Payment Integration:** -----
- **Hosting and Deployment:**  
  - vercel for deploying the website
  - herkou for storing the database

# **Milestone 2**

- **Project Organization:** Created a structured folder hierarchy with separate directories for frontend and backend.
- **Frontend Setup:** Initialized a React app to serve as the base for building the user interface.
- **Backend Setup:** Set up a Node.js server, laying the groundwork for future API integration.
- **Styling Configuration:** Integrated and configured Tailwind CSS for responsive and utility-based styling.
- **Login Page Development:** Designed and developed a functional and visually styled Login Page for the frontend.
- **Development Enhancements:** Added optional extensions to improve efficiency during development.
- **Version Control:** Pushed the project to a publicly accessible GitHub repository, ensuring it adheres to the submission guidelines.

This milestone established a solid foundation for the project by combining structured organization, modern styling, and initial feature development.

# Milestone 3: Project Setup for Backend 

In this milestone, the backend for the e-commerce application was set up, connecting it to a database and implementing basic error handling. 

**Backend Folder Structure:**

- controllers/
- models/
- routes/: Contains API route definitions.
- middleware/: Manages middleware functions like error handling.
- utils/: Contains reusable utility functions.
- config/: Stores environment and database configuration files.

**Server Setup**
- A Node.js server was created using Express.
- The server was configured to listen on a designated port (default: 5000).
- API endpoints were set up to handle basic requests.
 
 **Database Connection**
- Integrated MongoDB as the primary database for efficient data storage.
- Successfully established a connection to MongoDB using Mongoose.
- Ensured database connection parameters were stored securely using dotenv.

**Error Handling**

- Implemented basic error-handling middleware to provide clear and helpful error messages.
- Added fallback logic to handle uncaught errors and invalid route..