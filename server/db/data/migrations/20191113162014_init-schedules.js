exports.up = function(knex) {
    return knex.schema.createTable('schedules', table => {
        table.integer('student');
        table.integer('quarter');
        table
            .foreign('student')
            .references('student_id')
            .inTable('undergrads')
            .onDelete('cascade');
        table
            .foreign('quarter')
            .references('quarter_id')
            .inTable('quarters');
        table.specificType('classes', 'jsonb[]');

        table.primary(['student', 'quarter']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('schedules');
};
