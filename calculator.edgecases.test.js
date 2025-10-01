const { add, subtract, multiply, divide } = require('./calculator');

 test('suma con 0 devuelve el mismo número', () => {
  expect(add(0, 7)).toBe(7);
});

test('resta con números negativos', () => {
  expect(subtract(-5, -3)).toBe(-2);
});

test('multiplicación por 0 devuelve 0', () => {
  expect(multiply(8, 0)).toBe(0);
});

test('división con decimales 7 / 2 = 3.5', () => {
  expect(divide(7, 2)).toBe(3.5);
});

test('lanza error al dividir entre 0', () => {
  expect(() => divide(10, 0)).toThrow("No se puede dividir entre cero");
});



