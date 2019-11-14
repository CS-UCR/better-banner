exports.up = function(knex) {
    return knex.schema.createTable('professors', table => {
        table.integer('emp_id').primary();
        table
            .foreign('emp_id')
            .references('id')
            .inTable('users')
            .onDelete('cascade');
    });
};

exports.down = function(knex) {
    return knex.schmea.dropTableIfExists('professors');
};
