import knex from 'knex';
import knexfile from '../knexfile';

// default to development environment
const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];

export default knex(configOptions);
