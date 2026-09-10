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
  if (estado === "CA") {
    return 0.0825;
  }
  if (estado === "TX") {
    return 0.0625;
  }
  return 0; 
}

export { calcularPrecioNeto, obtenerImpuestoEstado };

