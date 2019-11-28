exports.up = function(knex) {
    return knex.schema.createTable('courses', table => {
        table.integer('course_id').primary();
        table.string('title', 150);
        table.integer('units');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('courses');
};

