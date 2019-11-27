exports.up = function(knex) {
    return knex.schema.alterTable('offerings', t => {
        t.string('days');
        t.time('start');
        t.time('end');
        t.string('location');
        t.renameColumn('professor', 'instructor');
    });
};

exports.down = function(knex) {
    return knex.schema.hasColumn('offerings', 'days').then(exists => {
        if (exists) {
            knex.schema.alterTable('offerings', t => {
                t.dropColumns('days', 'start', 'end');
            });
        }
    });
};
