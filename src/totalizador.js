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
  return 0; // Provoca el fallo intencional
}

export { calcularPrecioNeto, obtenerImpuestoEstado };
