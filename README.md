# Foodies API
A RESTful backend API for the Foodies App - a website where you can find, save in favorites, create, and share recipes. Built by Team-04 as a collaborative full-stack project.

**Live API:** [project-team-04.onrender.com/api/](https://project-team-04.onrender.com/api/)


## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | PostgreSQL |
| ORM | Sequelize |
| Auth | JSON Web Tokens (JWT) |
| Validation | Joi |
| File Uploads | Multer + Cloudinary |
| Password Hashing | bcrypt |
| Code Style | Prettier |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) v14+
- A [Cloudinary](https://cloudinary.com/) account (for image uploads)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arnary/project-Team-04.git
   cd project-Team-04
   git checkout dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Fill in the required values in `.env`.

4. **Initialize the database** (creates collections and seeds default data):
   ```bash
   node init_db.js
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3000/api/`.

## API Endpoints

**All routes are prefixed with `/api`.**

### Authentication - `/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/register` | Register a new user | no |
| `POST` | `/login` | Login user | no |
| `POST` | `/logout` | Logout current user | yes |
| `PATCH` | `/avatars` | Update user avatar | yes |

### Users - `/users`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/current` | Get current user info | yes |
| `POST` | `/follow` | Follow a user | yes |
| `POST` | `/unfollow` | Unfollow a user | yes |
| `GET` | `/following` | Get users the current user follows | yes |
| `GET` | `/followers` | Get followers of current user | yes |
| `GET` | `/favorites` | Get current user's favorite recipes | yes |
| `GET` | `/:id/recipes` | Get recipes by a specific user | yes |
| `GET` | `/:id/followers` | Get followers of a specific user | no |
| `GET` | `/:id` | Get details of a specific user | yes |

### Recipes - `/recipes`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/` | Get all recipes | no |
| `GET` | `/:id` | Get a recipe by ID | no |
| `GET` | `/popular` | Get popular recipes | no |
| `GET` | `/my` | Get current user's recipes | yes |
| `POST` | `/` | Create a new recipe | yes |
| `POST` | `favorites/:id` | Add recipe to favorites | yes |
| `DELETE` | `favorites/:id` | Remove recipe from favorites | yes |
| `DELETE` | `/:id` | Delete a recipe | yes |

### Categories - `/categories`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/` | Get all recipe categories | no |

### Ingredients - `/ingredients`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/` | Get all ingredients | no |

### Areas - `/areas`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/` | Get all areas | no |

### Testimonials - `/testimonials`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/` | Get all testimonials | no |

