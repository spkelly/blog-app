
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.text('username').notNullable();
    table.text('email');
    table.text('profile_pic');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
