Running MovieBox Locally
This README provides step-by-step instructions on how to set up and run MovieBox locally on your development machine. MovieBox is an HNGX stage 2 task

Prerequisites
Before you begin, make sure you have the following software installed on your computer:

Node.js: Download and install Node.js from https://nodejs.org/. Vite requires Node.js version 12.0 or higher.
Getting Started
Follow these steps to create and run a Vite project with React and TypeScript:

Create a New Vite Project: Open your terminal and run the following command to create a new Vite project:

1.  Clone the repository to your local machine:

git clone https://github.com/dev-hills/hng-stage-two.git

2. Change your current directory to the project folder:

cd your-project-Folder

3.Install project dependencies using npm
npm install

4. Running the Development Server
   To start the development server and run MovieBox, use one of this commands:
   npm run dev

The development server should start and open your project in a web browser. By default, it runs at http://localhost:3000.

4. Building for Production
   To build your project for production, you can use the following commands:
   npm run build
   This will create an optimized production build in the dist folder.

Additional Commands 5. To lint your code with ESLint:
npm run lint
