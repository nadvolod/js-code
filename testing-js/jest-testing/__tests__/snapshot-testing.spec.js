const { getFlyingSuperHeros } = require("../classes/super-heros");

//painful
test("manually validate the data", () => {
  const flyingHeros = getFlyingSuperHeros();
  console.log(flyingHeros);
  expect(flyingHeros).toEqual([
    { name: "Dynaguy", powers: ["disintegration ray", "fly"] },
  ]);
});
//using snapshot files
test("validate using a snapshot", function () {
  const flyingHeros = getFlyingSuperHeros();
  console.log(flyingHeros);
  expect(flyingHeros).toMatchSnapshot();
});

//using inline snapshots
test("uses inline snapshot", () => {
  const flyingHeros = getFlyingSuperHeros();
  console.log(flyingHeros);
  expect(flyingHeros).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "Dynaguy",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
    ]
  `);
});
