# Backend

## Running

First, install the dependencies:

```
npm install
```

Then, run:

```
npm start
```

### Database

Set the database config at the `.env` file:

- `POSTGRES_HOST` : database host
- `POSTGRES_PORT` : database port
- `POSTGRES_USER` : database user
- `POSTGRES_PASSWORD` : user's password
- `POSTGRES_DATABASE` : database

If you want to create a local database instance using docker, then call:

```
docker-compose up
```

To run migrations, first install `db-migrate` and `db-mgirate-pg` globally:

```
npm install -g db-migrate
npm install -g db-migrate-pg
```

Then, simply call:

```
db-migrate up
```
