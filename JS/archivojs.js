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
    5040,
    1
  )
);

stock.push(
  new Producto(
    "Espuma Nube",
    "Cuidado facial",
    "espuma de limpieza facial",
    "Kamikaze",
    2850,
    2
  )
);

stock.push(
  new Producto(
    "Scrub facial de almendras",
    "Cuidado facial",
    "exfoliante facial",
    "Kamikaze",
    3180,
    3
  )
);

stock.push(
  new Producto(
    "Mascarilla Neptuno",
    "Cuidado facial",
    "Mascarilla de arcilla",
    "Kamikaze",
    2520,
    4
  )
);
stock.push(
  new Producto(
    "Sheetmask",
    "Cuidado facial",
    "Mascara facial",
    "Kamikaze",
    150,
    5
  )
);
stock.push(
  new Producto(
    "Shampoo solido",
    "Cuidado capilar",
    "Shampoo fortalecedor y restaurador",
    "Kamikaze",
    2160,
    6
  )
);
stock.push(
  new Producto(
    "Acondicionador solido",
    "Cuidado capilar",
    "HIdratacion intensa",
    "Kamikaze",
    2160,
    7
  )
);
stock.push(
  new Producto(
    "balsamo labial",
    "Cuidado labial",
    "balsamo labial con color y aroma",
    "Kamikaze",
    2270,
    8
  )
);
stock.push(
  new Producto(
    "Pad XL",
    "Accesorio",
    "Pad facial reutilizable",
    "Kamikaze",
    900,
    9
  )
);
stock.push(
  new Producto(
    "Gua Sha",
    "Accesorio",
    "Piedra para masaje facial",
    "Kamikaze",
    3000,
    10
  )
);
let carrito = [];
listaItems = document.getElementById("listaItems");

function dibujarProductos() {
  const row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = ``;
  stock.forEach((producto) => {
    row.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
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
              id="#btnAgregarCarrito-${producto.id}"
              type="button"
              class="btn btn-outline-dark"
            >
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
        
        </div>
            `;
  });
  listaItems.appendChild(row);
  btnAgregarCarrito = document.querySelector("#btnAgregarCarrito");
  btnAgregarCarrito.addEventListener("click", () => {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
    });
  });
}

// CARRITO

modalContainer = document.getElementById("modalContainer");

function verCarrito() {
  const verCarrito = document.querySelector("#verCarrito");
  verCarrito.addEventListener("click", () => {});
}

/* function allEventsListener() {
  btnAgregarCarrito = document.querySelector("#btnAgregarCarrito");
  btnAgregarCarrito.allEventsListener("click", () => {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
    });
  });
} */

dibujarProductos();
/* allEventsListener(); */
console.log(carrito);
