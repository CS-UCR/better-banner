exports.up = function(knex) {
    return knex.schema.createTable('quarters', table => {
        table.increments('quarter_id').primary();
        table.date('start');
        table.date('end');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('quarters');
};
