# Chatify

Chatify is a real-time chat application that enables users to communicate instantly. Built using React and Vite for a fast and optimized frontend, it leverages Firebase for real-time data synchronization and authentication, eliminating the need for a traditional backend.

## Features

- **Real-time Messaging**: Send and recieve messages instantly using Firebase.
- **User Authentication**: Secure login and registration with Firebase Authentication.
- **Online Status**: Know when someone is typing in real-time.
- **Message History**: Store and retrieve message history from Firebase Firestore.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Front End**:
    - React + Vite (for faster development and optimized bundling)
    - Plain CSS

- **Database**: 
    - Firebase Firestore (for real-time data storage)

- **Authentication**:
    - Firebase Authentication (for user management)

- **Hosting**:
    - Firebase Hosting (for deployment)

## Installation

To run Chatify locally, follow these steps:

1. Clone this repository:
    ```
    git clone https://github.com/GioMjds/Chatify.git
    cd Chatify
    ```

2. Install the dependencies:
    ```
    npm install  # or yarn install
    ```

3. Set up Firebase:
    - Go to [Firebase Console](https://console.firebase.google.com/), create a new project, and set up Firestore and Authentication
    - Create a `.env` file in the root of your project and add your Firebase credentials
    ```
    VITE_API_KEY=<your_firebase_api_key>
    VITE_AUTH_DOMAIN=<your_firebase_auth_domain>
    VITE_PROJECT_ID=<your_firebase_project_id>
    VITE_STORAGE_BUCKET=<your_firebase_storage_bucket>
    VITE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
    VITE_APP_ID=<your_firebase_app_id>
    ```

4. Start the development server:
    ```
    npm run dev
    ```

5. Access your app in your localhost

# Usage

1. **Sign up / Log In**: Use Firebase Authentication to create an account or log in
2. **Start Chatting**: Send and recieve messages in real-time with Firebase Firestore
3. **Message History**: View past conversations stored in Firestore

# Contributing

Contributions are welcome! Please folow the steps below to contribute to Chatify:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes
4. Commit your changes (`git commmit -m "Add new feature"`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request

# License

This project is licensed under the MIT License

# Contact

If you have any questions, feel free to reach out:

- Email: giomjds@gmail.com
- GitHub: `@GioMjds`
- Messenger: Gio Majadas