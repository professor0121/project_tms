 # my files structure
📦 your-project
 ┣ 📂 components      # Reusable UI components
 ┃ ┣ 📜 Navbar.js
 ┃ ┣ 📜 Footer.js
 ┃ ┗ 📜 PostCard.js
 ┣ 📂 pages
 ┃ ┣ 📂 api          # Backend API routes
 ┃ ┃ ┣ 📂 auth
 ┃ ┃ ┃ ┣ 📜 login.js
 ┃ ┃ ┃ ┗ 📜 register.js
 ┃ ┃ ┣ 📂 users
 ┃ ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┃ ┗ 📜 [id].js
 ┃ ┃ ┗ 📂 posts
 ┃ ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┃ ┗ 📜 [id].js
 ┃ ┣ 📜 _app.js       # Global layout, styles, context
 ┃ ┣ 📜 index.js      # Home page
 ┃ ┣ 📜 login.js      # Login page
 ┃ ┗ 📜 register.js   # Register page
 ┣ 📂 models          # Mongoose models
 ┃ ┣ 📜 User.js
 ┃ ┗ 📜 Post.js
 ┣ 📂 lib             # Utility functions (DB, API handlers)
 ┃ ┗ 📜 mongodb.js
 ┣ 📂 middleware      # Custom middlewares (e.g., auth)
 ┃ ┗ 📜 auth.js
 ┣ 📂 context         # Global state management
 ┃ ┗ 📜 AuthContext.js
 ┣ 📂 styles          # Global styles
 ┃ ┗ 📜 globals.css
 ┣ 📜 .env.local      # Environment variables
 ┣ 📜 next.config.js  # Next.js config
 ┣ 📜 package.json    # Dependencies
 ┗ 📜 README.md       # Project documentation

## API Routes

### Auth Routes
- **POST /api/auth/login**: User login
- **POST /api/auth/register**: User registration

### User Routes
- **GET /api/users**: Get all users
- **GET /api/users/[id]**: Get user by ID

### Post Routes
- **GET /api/posts**: Get all posts
- **GET /api/posts/[id]**: Get post by ID

## Pages

### Auth Pages
- **/login**: Login page
- **/register**: Register page

### Main Pages
- **/**: Home page
- **/_app**: Global layout, styles, context

## Models
- **User.js**: Mongoose model for User
- **Post.js**: Mongoose model for Post

## Utility Functions
- **mongodb.js**: MongoDB connection utility

## Middleware
- **auth.js**: Custom authentication middleware

## Context
- **AuthContext.js**: Global state management for authentication

## Styles
- **globals.css**: Global styles

## Environment Variables
- **.env.local**: Environment variables

## Configuration
- **next.config.js**: Next.js configuration

## Dependencies
- **package.json**: Project dependencies#   p r o j e c t _ t m s  
 