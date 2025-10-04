const precioBase = 29990;
const stock = 10;
let cantidad = 1;
let total = precioBase * cantidad;

const precioBaseSpan = document.querySelector('#precio');
const unidadesSpan = document.querySelector('#unidades');
const totalSpan = document.querySelector('#total');
const btnIncrementar = document.querySelector('#aumentar');
const btnDecrementar = document.querySelector('#disminuir');

precioBaseSpan.innerHTML = precioBase.toLocaleString('es-CL');
unidadesSpan.innerHTML = cantidad;
totalSpan.innerHTML = total.toLocaleString('es-CL');

btnIncrementar.onclick = () => {
  if (cantidad == stock) return;
  cantidad++;
  unidadesSpan.innerHTML = cantidad;
  total = precioBase * cantidad;
  totalSpan.innerHTML = total.toLocaleString('es-CL');
};

btnDecrementar.onclick = () => {
  if (cantidad == 0) return;
  cantidad--;
  unidadesSpan.innerHTML = cantidad;
  total = precioBase * cantidad;
  totalSpan.innerHTML = total.toLocaleString('es-CL');
};
