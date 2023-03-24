# Mercado Libre Challenge

For running the backend server (in production or development environment) and `.env` file is required.
You can use `.env.example` as a core file.

## Production Mode
In the root directory of this repo, enter the following command in your prompt to install client's dependecies and build the frontend files:

```npm run build```

Once completed just run the backend server:

```npm start```

By default it will be running on port `7000` (Stated on `.env.example`).
On your browser enter to:

```http://localhost:PORT/```

## Development Mode
In order to run the app in a development environment follow the next steps:

### Backend
In the root directory of this repo enter the following command in your prompt

```npm install```

Once the dependecies were installed, run the backend server with the following command:

```npm start```

By default it will be running on port `7000` (Stated on `.env.example`).

### Frontend
Access the `client` folder with the following command:

```cd client```

And install all dependecies.

```npm install```

You can run the frontend development server entering:

```npm start```

By default it will be running on port `3000`.

Client's core is based on `create-react-app`, you can read `client's README.md` for more information.