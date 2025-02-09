# Dreams Portfolio Backend

Welcome to the backend of Dreams Portfolio, built with Node.js, Express, and MongoDB, handling CRUD operations for blogs, projects, and contact messages.

## 🚀 Features

| Feature  | Description                                    |
| -------- | ---------------------------------------------- |
| Blogs    | Create, Read, Update, Delete (CRUD) blog posts |
| Projects | Manage portfolio projects dynamically          |
| Contacts | Store and manage contact form submissions      |

## 🛠️ Tech Stack

| Category   | Technology             |
| ---------- | ---------------------- |
| Backend    | Node.js, Express.js    |
| Database   | MongoDB (Mongoose ODM) |
| Deployment | Vercel                 |

## 📌 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/Dreams-Portfolio-Backend.git
cd Dreams-Portfolio-Backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory and add:

```bash
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb+srv://portfolio:87vUNSRae2bbq3OI@cluster0.kndeci6.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0
DATABASE_USERNAME=portfolio
DATABASE_PASSWORD=87vUNSRae2bbq3OI
```

### 4️⃣ Run the Server

```bash
npm run start:dev
```

Server will start at `http://localhost:5000`.

## 🔥 API Endpoints

### 📝 Blogs

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/blogs`     | Get all blogs   |
| POST   | `/api/blogs`     | Create a blog   |
| GET    | `/api/blogs/:id` | Get single blog |
| PATCH  | `/api/blogs/:id` | Update blog     |
| DELETE | `/api/blogs/:id` | Delete blog     |

### 📂 Projects

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/projects`     | Get all projects   |
| POST   | `/api/projects`     | Create a project   |
| GET    | `/api/projects/:id` | Get single project |
| PATCH  | `/api/projects/:id` | Update project     |
| DELETE | `/api/projects/:id` | Delete project     |

### 📧 Contacts

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| GET    | `/api/contacts`     | Get all messages |
| POST   | `/api/contacts`     | Send a message   |
| DELETE | `/api/contacts/:id` | Delete message   |

## 🎯 Author

Developed with ❤️ by Moshfiqur Rahman (Emam Bokhari).

🚀 Happy Coding! 🎯
