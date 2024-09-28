# Weather Application
This is a weather application built with Laravel, React, and MySQL, using the Weatherbit API.

## Prerequisites

Make sure you have the following installed on your machine in order to run this application:
- PHP 8.2 or greater
- Composer
- MySQL
- Node.js (for the react portion of the application)


## Technologies Used

Backend: Laravel 11
Frontend: React 18
Database: MySQL
Authentication: Laravel Breeze
API Integration: Weatherbit API
Chart: Recharts

## Features

Current weather display for a given city, and country
Search history (last 5 searches)
16-day weather forecast

User authentication

## Setup Instructions

1. Clone the repository: https://github.com/Chimz-Codes-ZM/good_nature_agro.git

2. Install the PHP Dependencies: run the command `composer install`

3. Install Node.js dependencies: `npm install`

4. Create a `.env` file: Create a new `.env` file by running the command `cp .env.example .env`

5. Run the following command to generate an application key: `php artisan key:generate`

6. Set up a new MySQL database in your database gui with the following command: `CREATE DATABASE good_nature_agro`

7. Update the .env file with the database credentials:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=good_nature_agro
    DB_USERNAME=root
    DB_PASSWORD=

8. Run the migration files with the following command: `php artisan migrate`

## Running the application

To run the application, open the terminal and run the command `npm run dev` to start the frontend of the application. In a new tab on the terminal run the command `php artisan serve` to start the development server. Your application should be available on url `http://127.0.0.1:8000`.
