exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          make: "Honda",
          model: "Fit",
          mileage: 120000,
          VIN: "123abc",
          transmission_type: "automatic"
        },
        {
          id: 2,
          make: "Toyota",
          model: "Camery",
          mileage: 80000,
          VIN: "234bcd",
          transmission_type: "automatic"
        },
        {
          id: 3,
          make: "BMW",
          model: "3",
          mileage: 40000,
          VIN: "345cde",
          transmission_type: "manual"
        }
      ]);
    });
};
