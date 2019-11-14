exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table
            .increments('id')
            .notNullable()
            .primary();
        table.string('username', 10).notNullable();
        table.string('email', 15).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
