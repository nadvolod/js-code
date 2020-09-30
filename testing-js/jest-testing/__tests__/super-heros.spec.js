const { getFlyingSuperHeros } = require("../classes/super-heros");

// test("manually validate the array", () => {
//   const flying = getFlyingSuperHeros();
//   console.log(flying);
//   expect(flying).toEqual([
//     { name: "Dynaguy", powers: ["disintegration ray", "fly"] },
//   ]);
// });

// test('validate using a snapshot',()=>{
//     const flying = getFlyingSuperHeros()
//     expect(flying).toMatchSnapshot()
// })

test("validate using a snapshot", () => {
  const flying = getFlyingSuperHeros();
  expect(flying).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "Dynaguy",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
      Object {
        "name": "Superman",
        "powers": Array [
          "speed",
          "fly",
        ],
      },
    ]
  `);
});
