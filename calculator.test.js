const { add, subtract, multiply, divide } = require('./calculator');

test('suma 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('resta 10 - 4 = 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('multiplica 3 * 7 = 21', () => {
  expect(multiply(3, 7)).toBe(21);
});

test('divide 20 / 4 = 5', () => {
  expect(divide(20, 4)).toBe(5);
});

test('lanza error al dividir entre 0', () => {
  expect(() => divide(10, 0)).toThrow("No se puede dividir entre cero");
});
