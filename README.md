# Superheroes App

The Superheroes App is a web application that allows users to view, create, edit, and delete superheroes. Users can explore a list of superheroes, view their details, add new superheroes, update existing superheroes, and remove superheroes from the list.

## Features

- View a list of superheroes with their basic information.
- Click on a superhero to view their details, including nickname, real name, superpowers, and images.
- Add a new superhero to the list by providing their nickname, real name, superpowers, and images.
- Edit the information of an existing superhero, including their nickname, real name, superpowers, and images.
- Delete a superhero from the list.

## Technologies Used

- Frontend:
  - React.js: JavaScript library for building user interfaces.
  - React Router: Routing library for handling navigation and URL routing in the app.
  - Axios: JavaScript library for making HTTP requests to the backend API.

- Backend:
  - Node.js: JavaScript runtime for executing server-side code.
  - Express.js: Web framework for building the RESTful API.
  - MongoDB: NoSQL database for storing superhero data.
  - Mongoose: MongoDB object modeling for Node.js.

## Getting Started

To get started with the Superheroes App, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/superheroes-app.git`
2. Navigate to the project directory: `cd superheroes-app`
3. Install the dependencies: `npm install`
4. Start the frontend development server: `npm start`
5. Start the backend server (Make sure you have MongoDB installed and running): `npm run server`
6. Open your web browser and visit: `http://localhost:3000`

## API Endpoints

The backend API provides the following endpoints:

- `GET /superheroes`: Get a list of all superheroes.
- `GET /superheroes/:id`: Get the details of a specific superhero.
- `POST /superheroes`: Create a new superhero.
- `PATCH /superheroes/:id`: Update the details of a specific superhero.
- `DELETE /superheroes/:id`: Delete a specific superhero.

## Folder Structure

The folder structure of the Superheroes App is organized as follows:

