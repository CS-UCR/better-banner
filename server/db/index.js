import Knex from 'knex';

// TODO: make this connection dynamic depending on if dev or production
const knex = new Knex({
    client: 'pg',
    connection: {
        user: 'stanl',
        host: 'localhost',
        database: 'api',
        password: 'password',
        port: 5432
    }
});

function seed() {
    // eslint-disable-next-line
    console.log('Seeding the db...');
    knex.schema
        .createTable('users', table => {
            table.increments('id');
            table.string('user_name');
        })
        // Then query the table...
        .then(() => {
            return knex('users').insert({ user_name: 'Tim' });
        })

        // ...and using the insert id, insert into the other table.
        .then(rows => {
            return knex('accounts').insert({
                account_name: 'knex',
                user_id: rows[0]
            });
        })

        // Query both of the rows.
        .then(() => {
            return knex('users')
                .join('accounts', 'users.id', 'accounts.user_id')
                .select(
                    'users.user_name as user',
                    'accounts.account_name as account'
                );
        })

        // .map over the results
        .map(row => {
            console.log(row);
        })

        // Finally, add a .catch handler for the promise chain
        .catch(e => {
            console.error(e);
        });
}

// const pool = new Pool({
//     user: 'stanl',
//     host: 'localhost',
//     database: 'api',
//     password: 'password',
//     port: 5432
// });

// pool.query(text, (err, res) => {
//     if (err) {
//         console.log(err, res.rows);
//     } else {
//         const results = res.rows;
//         console.log(results);
//         app.get('/api', (req, res) => {
//             //res.send("these are my users")
//             res.send(results);
//         });
//         app.listen(3001, () =>
//             console.log('Web server is listening on port 3001')
//         );
//     }
// });

// pool.query(text).catch(e => console.error(e.stack));

export default {
    seed,
    query: knex
};
