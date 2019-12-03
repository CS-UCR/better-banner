exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table
            .increments('id')
            .notNullable()
            .primary();
        table.string('username', 50).notNullable();
        table.string('email', 50).notNullable();
        table.string('firstName', 50).notNullable();
        table.string('lastName', 50).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
