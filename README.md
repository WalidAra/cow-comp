# Dairy Farm Management System

This project is a backend application designed to manage the daily operations of a dairy farm, including cow registration, medical exams, birth records, and daily milk production. The application follows the MVC (Model-View-Controller) pattern and uses TypeScript, Express, and Prisma ORM.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- **Cow Management**: Register and manage cows, including details like breed and entry date.
- **Medical Exams**: Record medical exams for cows, including the diagnosis.
- **Birth Records**: Manage birth records for cows.
- **Daily Milk Production**: Track daily milk production for each cow.
- **RESTful API**: Expose CRUD operations via a RESTful API.
- **Database Storage**: Data is stored in a database using Prisma ORM.

## Project Structure


src/
├── controllers/       # Controllers for handling HTTP requests
├── dto/               # Data Transfer Objects (DTOs) for type safety
├── models/            # Models for interacting with the data layer
├── routes/            # Routes for defining API endpoints
├── services/          # Services for business logic (if any)
├── app.ts             # Main application setup
├── prisma/            # Prisma schema and migrations
└── utils/             # Utility functions (if any)


## Installation

1. Clone the repository:

   
     git clone https://github.com/yourusername/dairy-farm-management.git
     cd dairy-farm-management
   

2. Install dependencies:

   
     npm install
   

3. Install Prisma CLI (if not already installed globally):

   
     npm install -g prisma
   

## Environment Variables

Create a `.env` file in the root of the project and set up the following environment variables:


DATABASE_URL="postgresql://username:password@localhost:5432/dairy_farm_db?schema=public"
PORT=3000


## Running the Application

1. Generate the Prisma Client:

   
     npx prisma generate
   

2. Run database migrations:

   
     npx prisma migrate dev
   

3. Start the development server:

   
     npm run dev
   

The server will start on `http://localhost:3000`.

## API Endpoints

### Cows

- Create a new cow
    - `POST /api/cows`
- Get a cow by ID
    - `GET /api/cows/:id`
- Get all cows
    - `GET /api/cows`
- Update a cow by ID
    - `PUT /api/cows/:id`
- Delete a cow by ID
    - `DELETE /api/cows/:id`

### Medical Exams

- Create a new medical exam
    - `POST /api/medical-exams`
- Get a medical exam by ID
    - `GET /api/medical-exams/:id`
- Get all medical exams
    - `GET /api/medical-exams`
- Update a medical exam by ID
    - `PUT /api/medical-exams/:id`
- Delete a medical exam by ID
    - `DELETE /api/medical-exams/:id`

### Birth Records

- Create a new birth record
    - `POST /api/births`
- Get a birth record by ID
    - `GET /api/births/:id`
- Get all birth records
    - `GET /api/births`
- Update a birth record by ID
    - `PUT /api/births/:id`
- Delete a birth record by ID
    - `DELETE /api/births/:id`

### Daily Productions

- Create a new daily production record
    - `POST /api/daily-productions`
- Get a daily production record by ID
    - `GET /api/daily-productions/:id`
- Get all daily production records
    - `GET /api/daily-productions`
- Update a daily production record by ID
    - `PUT /api/daily-productions/:id`
- Delete a daily production record by ID
    - `DELETE /api/daily-productions/:id`

## Screenshots

![Screenshot 1](./one.png)
![Screenshot 2](./two.png)
![Screenshot 3](./three.png)
![Screenshot 4](./four.png)
![Screenshot 5](./five.png)
![Screenshot 6](./six.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.