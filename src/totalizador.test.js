import {
  calcularPrecioNeto,
  obtenerImpuestoEstado,
  obtenerPorcentajeDescuento,
  calcularTotalBase,
  obtenerReglasCategoria,
  calcularCostoEnvio,
  obtenerDescuentoEnvioCliente,
} from "./totalizador.js";

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

describe("Totalizador de Ventas - Slice 5: Descuento por volumen tramo inicial", () => {
  it("deberia retornar 0% para montos menores a 1000 y 3% para montos mayores o iguales a 1000", () => {
    expect(obtenerPorcentajeDescuento(500)).toEqual(0);
    expect(obtenerPorcentajeDescuento(1000)).toEqual(0.03);
  });
});

describe("Totalizador de Ventas - Slice 6: Tramos restantes de descuento por volumen", () => {
  it("deberia retornar el porcentaje correcto para 3000, 7000, 10000 y 30000", () => {
    expect(obtenerPorcentajeDescuento(3000)).toEqual(0.05);
    expect(obtenerPorcentajeDescuento(7000)).toEqual(0.07);
    expect(obtenerPorcentajeDescuento(10000)).toEqual(0.1);
    expect(obtenerPorcentajeDescuento(30000)).toEqual(0.15);
  });
});

describe("Totalizador de Ventas - Slice 7: Calculo de Total Base", () => {
  it("deberia calcular subtotal, impuesto y total final para 20 items a $3 en TX", () => {
    const resultado = calcularTotalBase(20, 3, "TX");
    expect(resultado.neto).toEqual(60);
    expect(resultado.descuentoMonto).toEqual(0);
    expect(resultado.impuestoMonto).toEqual(3.75);
    expect(resultado.total).toEqual(63.75);
  });
});

describe("Totalizador de Ventas - Slice 8: Reglas por Categoria", () => {
  it("deberia retornar impuestos y descuentos adicionales por categoria", () => {
    expect(obtenerReglasCategoria("Varios")).toEqual({ impuestoAdicional: 0, descuentoAdicional: 0 });
    expect(obtenerReglasCategoria("Bebidas alcoholicas")).toEqual({ impuestoAdicional: 0.07, descuentoAdicional: 0 });
    expect(obtenerReglasCategoria("Alimentos")).toEqual({ impuestoAdicional: 0, descuentoAdicional: 0.02 });
  });
});

describe("Totalizador de Ventas - Slice 9: Costo de Envio por Peso", () => {
  it("deberia calcular el envio unitario segun el peso y multiplicarlo por la cantidad", () => {
    // 5 items con peso 5 kg (rango 0-10 -> $0 c/u) = $0
    expect(calcularCostoEnvio(5, 5)).toEqual(0);
    // 2 items con peso 15 kg (rango 11-20 -> $3.5 c/u) = $7
    expect(calcularCostoEnvio(2, 15)).toEqual(7);
  });
});

describe("Totalizador de Ventas - Slice 10: Descuento de Envio por Tipo de Cliente", () => {
  it("deberia retornar el porcentaje de descuento en envio segun el tipo de cliente", () => {
    expect(obtenerDescuentoEnvioCliente("Normal")).toEqual(0);
    expect(obtenerDescuentoEnvioCliente("Recurrente")).toEqual(0.005);
    expect(obtenerDescuentoEnvioCliente("Antiguo Recurrente")).toEqual(0.01);
    expect(obtenerDescuentoEnvioCliente("Especial")).toEqual(0.015);
  });
});

