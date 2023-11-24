# React Task Tracker

A simple task tracker application built with React.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Scripts](#scripts)

## Description

This project is a basic task tracker application created with React. It allows users to add, delete, and toggle reminders for tasks. The application also includes a server using JSON Server to simulate a backend for storing and retrieving tasks.

## Features

- Add tasks with a title, day, and optional reminder.
- Delete tasks.
- Toggle task reminders.
- View the About page.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/waqas-taj/react-task-tracker.git
   ```

2. Change into the project directory:

   ```bash
   cd react-task-tracker
   ```

3. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

## Usage

1. Start the JSON Server (backend) by running:

   ```bash
   yarn server
   ```

   This will start the server on `http://localhost:5000`.

2. In a new terminal, start the React app:

   ```bash
   yarn start
   ```

   This will start the React app on `http://localhost:3000`.

3. Open your browser and go to `http://localhost:3000` to use the task tracker.

## Dependencies

- React
- React DOM
- React Icons
- React Router DOM
- JSON Server (for backend simulation during development)
- Other dependencies for development (see `package.json`)

## Scripts

- `start`: Start the React app on `http://localhost:3000`.
- `build`: Build the React app for production.
- `test`: Run tests using Jest.
- `eject`: Eject from Create React App for advanced configurations.
- `server`: Start JSON Server to simulate a backend on `http://localhost:5000`.
