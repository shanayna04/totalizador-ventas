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
  if (precioNeto >= 1000) {
    return 0.03;
  }
  return 0;
}

export {
  calcularPrecioNeto,
  obtenerImpuestoEstado,
  obtenerPorcentajeDescuento,
};


