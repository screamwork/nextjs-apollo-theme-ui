exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("name");
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.boolean("confirmed").notNullable().defaultTo(false);
    table.string("avatar");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
