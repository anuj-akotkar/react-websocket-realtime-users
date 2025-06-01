# React WebSocket Real-Time Users

This project is a simple React application that demonstrates real-time user tracking and mouse movement sharing using WebSockets. It displays a list of connected users and updates their positions in real time.

## Features

- Connects to a WebSocket server
- Shares mouse position with the server and other users
- Displays a real-time list of connected users

## Getting Started

### Prerequisites

- Node.js and npm installed
- A running WebSocket server (default: ws://127.0.0.1:8000)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-websocket-realtime-users.git
   cd react-websocket-realtime-users/client
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the React app:
   ```sh
   npm run dev
   ```

4. Make sure your WebSocket server is running at `ws://127.0.0.1:8000`.

## Usage

- Enter your username when prompted.
- Move your mouse to share your position with other connected users.
- See the list of connected users update in real time.

## License

MIT
