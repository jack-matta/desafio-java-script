let precio = 400000;
let cantidad = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = Intl.NumberFormat().format(precio);

function agregar(valuePar) {
  cantidad++;
  cantidadTotal = document.querySelector(".cantidad"); 
  cantidadTotal.innerHTML = Intl.NumberFormat().format(cantidad);
  total = precio * cantidad;

  document.getElementById("valor-total").textContent = Intl.NumberFormat().format(total);

}

function restar(valuePar) {
  cantidad--;
  cantidadTotal = document.querySelector(".cantidad"); 
  cantidadTotal.innerHTML = Intl.NumberFormat().format(cantidad);

  if (cantidad <= 0) {
    total = 0;
    cantidad = 0;

    valorTotal = document.querySelector(".valor-total"); 
    valorTotal.innerHTML = Intl.NumberFormat().format(total);
    document.getElementById("cantidad").textContent = 0;

  } else {
    total = precio * cantidad;
  }
  document.getElementById("valor-total").textContent = Intl.NumberFormat().format(total);
}