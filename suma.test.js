const suma = require('./suma')

test('La suma entre 5 y 3 debe ser 8', () => {
    expect(suma(5,3)).toBe(8);
})

test('La suma entre 5 y -3 debe ser 2', () => {
    expect(suma(5,-3)).toBe(2);
})

test('La suma entre 5 y una letra debe ser NaN', () => {
    expect(suma(5,'e')).toBe(NaN);
})

test('La suma entre 2 y cualquier número debe dar cero', () => {
    expect(suma(2,5000)).toBe(0);
})