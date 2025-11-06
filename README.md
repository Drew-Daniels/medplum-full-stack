# `MedPlum` Full Stack

https://www.medplum.com/docs/self-hosting/running-full-medplum-stack-in-docker

## Initial Setup

```bash
git clone https://github.com/Drew-Daniels/medplum-full-stack.git
cd medplum-full-stack || exit
```

In one terminal, start the `docker-compose` stack:

```bash
docker compose up
```

Create an `.env` file:

```bash
cp .env.example .env
```

In another terminal, run the following to view the MedPlum UI:

```bash
open http://localhost:3000
```

Register an account

Create a Client Application using the MedPlum UI if one is not already created under `Admin > Project > Clients > (Select a Client Application) > Click on the Client Application Name Link > Copy Client Application ID and Secret`

https://www.medplum.com/docs/auth/client-credentials#obtaining-credentials

Adjust values in `.env` to match the Client ID and Client Secret of the Client Application you created

```env
# ...
MEDPLUM_CLIENT_ID=your-client-id
MEDPLUM_CLIENT_SECRET=your-client-secret
```

In another terminal, start the `TypeScript` compiler:

```bash
npm run dev
```

Upload sample data using the Batch Upload Tool available at http://localhost:3000/batch

Run various searches against uploaded data:

```bash
node dist/index.js
```

## Shutting down the stack

In the terminal you have `docker compose up` running, type `CTRL+C`

## Subsequent Logins

The data you created in your last session should be persisted on subsequent logins.

```bash
docker compose up
```

Log in using the account you previously created
