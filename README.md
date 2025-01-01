# Task Management Backend API

A robust REST API backend service for managing tasks, built with Node.js.

## Features

- User authentication and authorization
- Task CRUD operations
- Color-coded task organization
- Due date management
- User-specific task ownership

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## API Endpoints

### Tasks

- `POST /api/tasks` - Create a new task
  - Required fields: title, description, hexColor, dueDate
- `GET /api/tasks` - Get all tasks
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Chinokoo/task-flutter-backend.git

```

2. cd task-flutter-backend.

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm run dev
```

## Environment Variables

. create a `.env` file in the root directory and add the following variables:

```
PORT=5000
MONGO_URI=mongodb:your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Project Structure

```
task-flutter-backend/
├── controllers/
│   └── task.controller.js
├── models/
├── routes/
├── middleware/
├── config/
└── index.js
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](https://mit-license.org/) file for details.

This README provides a solid foundation for your project documentation and can be expanded based on additional features and requirements.
