import { calcularPrecioNeto, obtenerImpuestoEstado } from "./totalizador.js";

describe("Totalizador de Ventas - Slice 1: Precio Neto", () => {
  it("deberia calcular el precio neto multiplicando cantidad por precio unitario", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });

  it("deberia retornar un mensaje de error si la cantidad o el precio son menores o iguales a cero", () => {
    expect(calcularPrecioNeto(-5, 10)).toEqual("Cantidad invalida");
    expect(calcularPrecioNeto(5, 0)).toEqual("Precio invalido");
  });
});

describe("Totalizador de Ventas - Slice 3: Impuesto base por estado", () => {
  it("deberia retornar 8.25% para CA y 6.25% para TX", () => {
    expect(obtenerImpuestoEstado("CA")).toEqual(0.0825);
    expect(obtenerImpuestoEstado("TX")).toEqual(0.0625);
  });
});

describe("Totalizador de Ventas - Slice 4: Impuestos restantes y validacion", () => {
  it("deberia retornar impuestos para UT (6.65%), NV (8.00%), AL (4.00%) y error para estado invalido", () => {
    expect(obtenerImpuestoEstado("UT")).toEqual(0.0665);
    expect(obtenerImpuestoEstado("NV")).toEqual(0.08);
    expect(obtenerImpuestoEstado("AL")).toEqual(0.04);
    expect(obtenerImpuestoEstado("XX")).toEqual("Estado invalido");
  });
});