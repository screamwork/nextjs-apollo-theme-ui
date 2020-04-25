exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "ryzen",
          email: "abugung@gmail.com",
          password: "aaa",
          confirmed: true,
          avatar: "",
        },
        {
          id: 2,
          name: "hans",
          email: "a@a.com",
          password: "bbb",
          confirmed: true,
          avatar: "",
        },
      ]);
    });
};
