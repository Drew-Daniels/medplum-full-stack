# `MedPlum` Full Stack

https://www.medplum.com/docs/self-hosting/running-full-medplum-stack-in-docker

## Initial Setup

```bash
git clone <url>
cd medplum-full-stack
```

In one terminal, start the `docker-compose` stack:

```bash
docker compose up
```

In another terminal, run the following to view the MedPlum UI:

```bash
open http://localhost:3000
```

Register an account

## Shutting down the stack

In the terminal you have `docker compose up` running, type `CTRL+C`

## Subsequent Logins

The data you created in your last session should be persisted on subsequent logins.

```bash
docker compose up
```

Log in using the account you previously created

