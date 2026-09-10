import { calcularTotalOrden } from "./totalizador.js";

const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(document.querySelector("#cantidad").value);
  const precio = Number(document.querySelector("#precio").value);
  const estado = document.querySelector("#estado").value;
  const categoria = document.querySelector("#categoria").value;
  const peso = Number(document.querySelector("#peso").value);
  const tipoCliente = document.querySelector("#cliente").value;

  const res = calcularTotalOrden(cantidad, precio, estado, categoria, peso, tipoCliente);

  if (res.error) {
    div.innerHTML = `<p class="error">Error: ${res.error}</p>`;
    return;
  }

  div.innerHTML = `
    <p><strong>Precio neto:</strong> $${res.neto}</p>
    <p><strong>Descuento porcentual:</strong> -$${res.descuentoPorcentajeMonto}</p>
    <p><strong>Descuento fijo:</strong> -$${res.descuentoFijoMonto}</p>
    <p><strong>Subtotal con descuento:</strong> $${res.subtotalConDescuentos}</p>
    <p><strong>Impuesto total:</strong> +$${res.impuestoMonto}</p>
    <p><strong>Costo de envío:</strong> +$${res.envioFinal}</p>
    <hr/>
    <p class="total-final">Precio total: $${res.total}</p>
  `;
});