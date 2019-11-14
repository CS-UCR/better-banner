exports.up = function(knex) {
    return knex.schema.createTable('undergrads', table => {
        table.integer('student_id').primary();
        table
            .foreign('student_id')
            .references('id')
            .inTable('users')
            .onDelete('cascade');

        // will be an array of completed course id's
        table.specificType('completed_courses', 'jsonb[]');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('undergrads');
};
