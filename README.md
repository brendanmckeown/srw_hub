# srw_hub
Stress relief in the workplace hub

## Prerequisites

* Node `>= v6.3.0`

## Development Setup

1. Install dependencies

        npm install

1. Create your environment configuration

        cp .env.dev .env

1. Run database migrations

        npm run db:migrate

1. Start the server

        npm start

## Create a Model

1. Define database URL environment var

        export DATABASE_URL={{ DATABASE_URL}}

1. Create migration file

        node_modules/.bin/sequelize model:create --name ModelName --attributes attributeName:integer, attributeName: string

1. Run migration

        node_modules/.bin/sequelize db:migrate
