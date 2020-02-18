exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("make", 256).notNullable();
    tbl.string("model", 256).notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("VIN", 256).notNullable();
    tbl.string("transmission_type", 128);
    tbl.string("status", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
