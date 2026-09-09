import { calcularPrecioNeto } from "./totalizador.js";

describe("Totalizador de Ventas - Slice 1: Precio Neto", () => {
  it("deberia calcular el precio neto multiplicando cantidad por precio unitario", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });
});