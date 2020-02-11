# React_Redux_Authentication_User
Authentication User Login ,Register with React ,Redux. Backend Mongo DB ,Express

Simple User Register and Login authentication using Redux and React js and Mongo DB, Express for the backend.

Guest Users can see the Home Page and the Navigation, where the Login and Register links are displayed.

After successful registration, the user is redirected to the login page.
After a successful login, the user is redirected to the home page and the Navigation is displayed logout link and welcome the current user.
Also for the logged user, we save jwt token to the local storage, which is coming from the backend.
If you are landing for the first time(at this day on the home page),
the app is checking for authentication token and recognize the login user until he is not pushing the logout.
After logout the local storage is clear and the user is logout.
We still need to verify the data from the fields with toasts or another library.

The application is built entirely on the latest JavaScript technologies: React.js (client-side) and node.js -express (server-side).
Resolve Dependencies

When the project is cloned or downloaded, type in the terminal the following in both Server and Client directory:

npm install
Run the webserver

The app uses nodemon. To run the webserver type in terminal the following:

nodemon start
Run the React app

The app uses React on the client-side. To run the React app type in the second terminal the following:

cd client
npm start

By default, the app is running on:

localhost:3000
