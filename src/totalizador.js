function calcularPrecioNeto(cantidad, precio) {
  if (cantidad <= 0) {
    return "Cantidad invalida";
  }
  if (precio <= 0) {
    return "Precio invalido";
  }
  return cantidad * precio;
}

function obtenerImpuestoEstado(estado) {
  const impuestos = {
    UT: 0.0665,
    NV: 0.08,
    TX: 0.0625,
    AL: 0.04,
    CA: 0.0825,
  };

  if (impuestos[estado] !== undefined) {
    return impuestos[estado];
  }
  return "Estado invalido"; 
}

function obtenerPorcentajeDescuento(precioNeto) {
  if (precioNeto >= 30000) return 0.15;
  if (precioNeto >= 10000) return 0.1;
  if (precioNeto >= 7000) return 0.07;
  if (precioNeto >= 3000) return 0.05;
  if (precioNeto >= 1000) return 0.03;
  return 0;
}

function calcularTotalBase(cantidad, precio, estado = "CA") {
  const neto = calcularPrecioNeto(cantidad, precio);
  if (typeof neto === "string") return neto;

  const tasaImpuesto = obtenerImpuestoEstado(estado);
  if (typeof tasaImpuesto === "string") return tasaImpuesto;

  const tasaDescuento = obtenerPorcentajeDescuento(neto);
  const descuentoMonto = neto * tasaDescuento;
  const subtotalConDescuento = neto - descuentoMonto;
  const impuestoMonto = Number((subtotalConDescuento * tasaImpuesto).toFixed(2));
  const total = Number((subtotalConDescuento + impuestoMonto).toFixed(2));

  return {
    neto,
    descuentoMonto,
    subtotalConDescuento,
    impuestoMonto,
    total,
  };
}

function obtenerReglasCategoria(categoria) {
  const reglas = {
    Alimentos: { impuestoAdicional: 0, descuentoAdicional: 0.02 },
    "Bebidas alcoholicas": { impuestoAdicional: 0.07, descuentoAdicional: 0 },
    "Material de escritorio": { impuestoAdicional: 0, descuentoAdicional: 0.015 },
    Muebles: { impuestoAdicional: 0.03, descuentoAdicional: 0 },
    Electronicos: { impuestoAdicional: 0.04, descuentoAdicional: 0.01 },
    Vestimenta: { impuestoAdicional: 0.02, descuentoAdicional: 0 },
    Varios: { impuestoAdicional: 0, descuentoAdicional: 0 },
  };

  return reglas[categoria] || reglas["Varios"];
}

function calcularCostoEnvio(cantidad, pesoVolumetrico) {
  let costoUnitario = 0;

  if (pesoVolumetrico > 200) {
    costoUnitario = 9;
  } else if (pesoVolumetrico >= 101) {
    costoUnitario = 8;
  } else if (pesoVolumetrico >= 81) {
    costoUnitario = 6.5;
  } else if (pesoVolumetrico >= 41) {
    costoUnitario = 6;
  } else if (pesoVolumetrico >= 21) {
    costoUnitario = 5;
  } else if (pesoVolumetrico >= 11) {
    costoUnitario = 3.5;
  } else {
    costoUnitario = 0;
  }

  return Number((costoUnitario * cantidad).toFixed(2));
}

function obtenerDescuentoEnvioCliente(tipoCliente) {
  const descuentos = {
    Normal: 0,
    Recurrente: 0.005,
    "Antiguo Recurrente": 0.01,
    Especial: 0.015,
  };

  return descuentos[tipoCliente] !== undefined ? descuentos[tipoCliente] : 0;
}

function calcularDescuentoFijo(tipoCliente, categoria, precioNeto) {
  if (tipoCliente === "Recurrente" && categoria === "Alimentos" && precioNeto > 3000) {
    return 100;
  }
  if (tipoCliente === "Especial" && categoria === "Electronicos" && precioNeto > 7000) {
    return 200;
  }
  return 0;
}

function calcularTotalOrden(cantidad, precio, estado = "CA", categoria = "Varios", peso = 0, cliente = "Normal") {
  return {}; // Provoca el fallo intencional
}

export {
  calcularPrecioNeto,
  obtenerImpuestoEstado,
  obtenerPorcentajeDescuento,
  calcularTotalBase,
  obtenerReglasCategoria,
  calcularCostoEnvio,
  obtenerDescuentoEnvioCliente,
  calcularDescuentoFijo,
  calcularTotalOrden,
};


