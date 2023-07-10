/* const listaProductosCuidadoFacial = [];
const listaProductosCuidadoCapilar = [];
const listaProductosCuidadoLabial = [];
const listaProductosAccesorios = []; */

const stock = [];

stock.push(
  new Producto(
    "Crema Cielo",
    "Cuidado facial",
    "hidratante facial",
    "Kamikaze",
    5040
  )
);

stock.push(
  new Producto(
    "Espuma Nube",
    "Cuidado facial",
    "espuma de limpieza facial",
    "Kamikaze",
    2850
  )
);

stock.push(
  new Producto(
    "Scrub facial de almendras",
    "Cuidado facial",
    "exfoliante facial",
    "Kamikaze",
    3180
  )
);

stock.push(
  new Producto(
    "Mascarilla Neptuno",
    "Cuidado facial",
    "Mascarilla de arcilla",
    "Kamikaze",
    2520
  )
);
stock.push(
  new Producto("Sheetmask", "Cuidado facial", "Mascara facial", "Kamikaze", 150)
);
stock.push(
  new Producto(
    "Shampoo solido",
    "Cuidado capilar",
    "Shampoo fortalecedor y restaurador",
    "Kamikaze",
    2160
  )
);
stock.push(
  new Producto(
    "Acondicionador solido",
    "Cuidado capilar",
    "HIdratacion intensa",
    "Kamikaze",
    2160
  )
);
stock.push(
  new Producto(
    "balsamo labial",
    "Cuidado labial",
    "balsamo labial con color y aroma",
    "Kamikaze",
    2270
  )
);
stock.push(
  new Producto(
    "Pad XL",
    "Accesorio",
    "Pad facial reutilizable",
    "Kamikaze",
    900
  )
);
stock.push(
  new Producto(
    "Gua Sha",
    "Accesorio",
    "Piedra para masaje facial",
    "Kamikaze",
    3000
  )
);

function dibujarProductos() {
  const row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = ``;
  let counter = 1;
  console.log(stock);
  stock.forEach((producto) => {
    if (counter <= 3) {
      row.innerHTML += `
      <div class="card-group">
      <div class="card card border-dark">
        <img
          src="../img/cuidadofacial.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body text-center">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text card-text">$${producto.precio}</p>
          <p>
            <strong>4</strong> cuotas sin interés de
            <strong>$2.462,50</strong>
          </p>
          <button
            id="item"
            data-index="${index}"
            type="button"
            class="btn btn-outline-dark"
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
        `;
      counter++;

      row.querySelector(`#item-${index}`).addEventListener("click", () => {
        carrito.push(stock[index]);
      });
    } else {
      listaItems.appendChild(row);
      row = document.createElement("div");
      row.classList.add("row");
      row.innerHTML = ``;
      counter = 1;
    }
  });
  listaItems.appendChild(row);
}

dibujarProductos();

function DibujarCarrito() {}
