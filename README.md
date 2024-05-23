# Chat Application
## This is a real-time chat application built with Node.js, Express, Socket.io, and MongoDB. The application supports multiple chat rooms, private messaging, and a variety of modern chat features.

 ## Features
* Real-Time Messaging: Instant messaging powered by Socket.io.
* Multiple Chat Rooms: Users can join different chat rooms to communicate.
* Private Messaging: Send direct messages to specific users.
* User Authentication: Secure login and registration using Passport.js.
* Chat History: Messages are stored in MongoDB for persistent chat history.
* Online Users: Display a list of online users.
* Typing Indicators: See when another user is typing.
* Responsive Design: Works on both desktop and mobile devices.
* 
## Technologies Used
* Node.js: JavaScript runtime environment.
* Express: Web framework for Node.js.
* Socket.io: Enables real-time bidirectional event-based communication.
* MongoDB: NoSQL database for storing chat data.
* Passport.js: Middleware for authentication.
* EJS: Templating engine for rendering HTML pages.

## Getting Started
Prerequisites
Node.js: Make sure you have Node.js installed. You can download it from nodejs.org.
MongoDB: Ensure MongoDB is installed and running. You can download it from mongodb.com.
Installation
Clone the repository:

```bash
git clone https://github.com/iamtonmoy0/chat-application.git
cd chat-application
Install the dependencies:
```
bash
Copy code
```
npm install
```
Create a .env file in the root directory and add your MongoDB URI and session secret:

plaintext
```
MONGODB_URI=your_mongodb_uri
SESSION_SECRET=your_session_secret
```
Start the server:

bash
```
npm start

```

Usage
Register
Navigate to the registration page.
Fill out the form and submit to create a new account.
Login
Navigate to the login page.
Enter your credentials to log in.

Push to the branch (git push origin feature/your-feature).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Thanks to the developers of Node.js, Express, Socket.io, and MongoDB for their amazing tools.
For any questions or feedback, please feel free to contact me at iamtonmoy0@gmail.com.
