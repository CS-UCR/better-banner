exports.up = function(knex) {
    return knex.schema.createTable('registration', t => {
        t.integer('student_id').primary();
        t.foreign('student_id')
            .references('student_id')
            .inTable('undergrads')
            .onDelete('cascade');
        t.specificType('classes', 'integer[]');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('registration');
};
