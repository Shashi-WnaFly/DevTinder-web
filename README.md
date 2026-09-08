# DevTinder Web

DevTinder is a React web application for discovering developers, sending and reviewing connection requests, managing connections, and chatting with accepted connections.

## Features

- Email and password authentication
- OTP verification and password reset flow
- Developer feed with profile cards
- Send, accept, and reject connection requests
- View connections and edit your profile
- Real-time chat with Socket.IO
- Premium subscription page and verified profile indicators
- Contact form and privacy/agreement pages
- Responsive interface built with Tailwind CSS and daisyUI

## Tech Stack

- React 19 and React Router
- Vite
- Redux Toolkit and React Redux
- Axios for API requests
- Socket.IO Client for real-time messaging
- Tailwind CSS, daisyUI, and Lucide React
- Motion for animations

## Prerequisites

- Node.js 18 or newer
- npm
- A running DevTinder backend API

The frontend expects the backend to run at `http://localhost:7777` during local development. The API uses credentialed requests, so the backend must allow the frontend origin and cookies. In a deployed environment, the frontend uses the `/api/v1` path.

## Getting Started

1. Clone the repository and move into the project directory.

	```bash
	git clone <repository-url>
	cd DevTinder-web
	```

2. Install dependencies.

	```bash
	npm install
	```

3. Start the development server.

	```bash
	npm run dev
	```

4. Open the URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Developer feed |
| `/login` | Login and signup |
| `/forgot_password` | Password recovery |
| `/profile` | Current user profile |
| `/verify` | Account verification |
| `/requests` | Received connection requests |
| `/connections` | Accepted connections |
| `/chat/:targetUserId` | Chat with a connection |
| `/premium` | Premium subscription options |
| `/contact_us` | Contact form |

## Project Structure

```text
src/
├── assets/       Reusable illustration and UI components
├── components/   Auth, feed, profile, connection, chat, and layout views
├── configs/      Axios and Socket.IO configuration
├── hooks/        Reusable React hooks
├── services/     API service modules
└── utils/        Redux store, slices, constants, and shared helpers
```

## Backend Integration

API requests are created with Axios and include credentials so the backend session cookie is sent with each request. The frontend also opens a Socket.IO connection against the same base URL for chat functionality.

For local development, make sure the backend is available at:

```text
http://localhost:7777
```

The backend should provide authentication, profile, feed, connection, chat, OTP, contact, and subscription endpoints expected by the frontend.

## Production Build

Create a production build with:

```bash
npm run build
```

Serve the generated `dist` directory with a static hosting provider or web server configured to route frontend paths back to `index.html`. The deployed frontend expects API requests under `/api/v1`.

