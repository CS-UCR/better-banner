import Knex from 'knex';

// TODO: make this connection dynamic depending on if dev or production
const knex = new Knex({
    client: 'pg',
    connection: {
        user: 'admin',
        host: 'localhost',
        database: 'better-banner',
        password: '',
        port: 5432
    }
});

function seed() {
    // eslint-disable-next-line
    console.log('Seeding the db...');
    knex.schema.hasTable('users').then(exists => {
        if (!exists) {
            return (
                knex.schema
                    .createTable('users', function(table) {
                        table.increments('id');
                        table.string('user_name');
                    })

                    // ...and another
                    .createTable('accounts', function(table) {
                        table.increments('id');
                        table.string('account_name');
                        table
                            .integer('user_id')
                            .unsigned()
                            .references('users.id');
                    })

                    // Then query the table...
                    .then(function() {
                        return knex('users').insert({ user_name: 'Tim' });
                    })

                    // ...and using the insert id, insert into the other table.
                    .then(function(rows) {
                        return knex('accounts').insert({
                            account_name: 'knex',
                            user_id: rows[0]
                        });
                    })

                    // Query both of the rows.
                    .then(function() {
                        return knex('users')
                            .join('accounts', 'users.id', 'accounts.user_id')
                            .select(
                                'users.user_name as user',
                                'accounts.account_name as account'
                            );
                    })

                    // .map over the results
                    .map(function(row) {
                        console.log(row);
                    })

                    // Finally, add a .catch handler for the promise chain
                    .catch(function(e) {
                        console.error(e);
                    })
            );
        }
        return {};
    });
}

export default {
    seed,
    query: knex
};
