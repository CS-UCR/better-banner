require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_URL,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        },
        migrations: {
            directory: './db/data/migrations'
        },
        seeds: { directory: './db/data/seeds' }
    },

    production: {
        client: 'pg',
        connection: {
            database: process.env.DB_URL,
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './db/data/migrations'
        },
        seeds: { directory: './db/data/seeds' }
    }
};
