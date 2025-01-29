# Real-Time Chat with Express and Socket.IO

This project is a simple **real-time chat application** built with **Express** and **Socket.IO**. It allows users to send and receive messages instantly, while also differentiating messages based on the sender.

## Features
- Real-time communication between users using Socket.IO.
- User selection via a dropdown menu (`<select>`).
- Messages are tagged visually to differentiate between the sender and other users.
- Simple and clean structure for easy customization and further development.

## How It Works
1. **Backend**:
   - The server is built with **Express** and uses **Socket.IO** for real-time communication.
   - It serves an HTML file (`index.html`) along with static resources.
   - Listens for user connections (`connection`) and broadcasts chat messages (`chat`) to all connected users.

2. **Frontend**:
   - A simple interface with:
     - A dropdown menu to select the user.
     - A text input for typing messages.
     - A list to display chat messages in real time.
   - Uses Socket.IO to emit and receive chat messages.
   - Highlights messages from the sender differently than other users.
