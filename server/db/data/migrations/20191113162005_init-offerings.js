exports.up = function(knex) {
    return knex.schema.createTable('offerings', table => {
        table.integer('course_id');
        table.integer('professor');
        table.integer('quarter');
        table
            .foreign('course_id')
            .references('course_id')
            .inTable('courses')
            .onDelete('cascade');
        table
            .foreign('professor')
            .references('emp_id')
            .inTable('professors');
        table
            .foreign('quarter')
            .references('quarter_id')
            .inTable('quarters');

        table.integer('capacity');

        table.primary(['course_id', 'professor']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('offerings');
};
