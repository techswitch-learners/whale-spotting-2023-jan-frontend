# Whale Spotting Frontend

## Startup instructions

First, get the backend up and running. Check it's available at `https://localhost:7127`.

Once you've confirmed this, create a file in the root of this project called `.env.local`, and add this line:

```dotenv
VITE_BACKEND_URL=https://localhost:7127
```

This will allow the frontend to talk to your backend running locally, but will be overwritten by the deployed backend (`https://ws-backend-staging.herokuapp.com/` or `https://ws-backend-prod.herokuapp.com/`) when deployed.

Then, run:

```shell
npm install
npm run dev
```

to run the site in development mode. Development mode means that any changes you make to the files will be reflected on the running site _in real time_, which can be very handy!
