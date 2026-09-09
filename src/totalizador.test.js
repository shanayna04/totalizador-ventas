import { calcularPrecioNeto } from "./totalizador.js";

describe("Totalizador de Ventas - Slice 1: Precio Neto", () => {
  it("deberia calcular el precio neto multiplicando cantidad por precio unitario", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });

  it("deberia retornar un mensaje de error si la cantidad o el precio son menores o iguales a cero", () => {
    expect(calcularPrecioNeto(-5, 10)).toEqual("Cantidad invalida");
    expect(calcularPrecioNeto(5, 0)).toEqual("Precio invalido");
  });
});

