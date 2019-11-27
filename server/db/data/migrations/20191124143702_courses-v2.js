exports.up = function(knex) {
    return knex.schema.alterTable('courses', t => {
        t.json('dependencies');
    });
};

exports.down = function(knex) {
    return knex.schema.hasColumn('courses', 'dependencies').then(exists => {
        if (exists) {
            knex.schema.alterTable('courses', t => {
                t.dropColumn('dependencies');
            });
        }
    });
};
