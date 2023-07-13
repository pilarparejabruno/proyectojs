/* const listaProductosCuidadoFacial = [];
const listaProductosCuidadoCapilar = [];
const listaProductosCuidadoLabial = [];
const listaProductosAccesorios = []; */

const stock = [];
const carrito = [];
const total = 0;

stock.push(
  new Producto(
    "Crema Cielo",
    "Cuidado facial",
    "hidratante facial",
    "Kamikaze",
    5040,
    1,
    "fotoproducto-cremacielo.jpg"
  )
);

stock.push(
  new Producto(
    "Espuma Nube",
    "Cuidado facial",
    "espuma de limpieza facial",
    "Kamikaze",
    2850,
    2,
    "fotoproducto-espumanube.jpg"
  )
);

stock.push(
  new Producto(
    "Scrub facial de almendras",
    "Cuidado facial",
    "exfoliante facial",
    "Kamikaze",
    3180,
    3,
    "fotoproducto-scrubfacial.jpg"
  )
);

stock.push(
  new Producto(
    "Mascarilla Neptuno",
    "Cuidado facial",
    "Mascarilla de arcilla",
    "Kamikaze",
    2520,
    4,
    "fotoproducto-mascarillaneptuno.jpg"
  )
);
stock.push(
  new Producto(
    "Sheetmask",
    "Cuidado facial",
    "Mascara facial",
    "Kamikaze",
    150,
    5,
    "fotoproducto-mascarillaneptuno.jpg"
  )
);
stock.push(
  new Producto(
    "Shampoo solido",
    "Cuidado capilar",
    "Shampoo fortalecedor y restaurador",
    "Kamikaze",
    2160,
    6,
    "fotoproducto-shampoo.jpg"
  )
);
stock.push(
  new Producto(
    "Acondicionador solido",
    "Cuidado capilar",
    "HIdratacion intensa",
    "Kamikaze",
    2160,
    7,
    "fotoproducto-acondicionador.jpg"
  )
);
stock.push(
  new Producto(
    "balsamo labial",
    "Cuidado labial",
    "balsamo labial con color y aroma",
    "Kamikaze",
    2270,
    8,
    "fotoproducto-balsamolabial.jpg"
  )
);
stock.push(
  new Producto(
    "Pad XL",
    "Accesorio",
    "Pad facial reutilizable",
    "Kamikaze",
    900,
    9,
    "fotoproducto-padxl.jpg"
  )
);
stock.push(
  new Producto(
    "Gua Sha",
    "Accesorio",
    "Piedra para masaje facial",
    "Kamikaze",
    3000,
    10,
    "fotoproducto-guasha.jpg"
  )
);
stock.push(
  new Producto(
    "Hidrolato de rosas",
    "Cuidado facial",
    "Tónico hidratante",
    "Kamikaze",
    3860,
    11,
    "fotoproducto-hidrolatoderosas.jpg"
  )
);
stock.push(
  new Producto(
    "Aceite de jojoba",
    "Cuidado facial",
    "Pi",
    "Kamikaze",
    2800,
    12,
    "fotoproducto-aceitedejojoba.jpg"
  )
);
stock.push(
  new Producto(
    "Rollon Magnolia",
    "Cuidado facial",
    "Contorno de ojos",
    "Kamikaze",
    5000,
    13,
    "fotoproducto-rollonmagnolia.jpg"
  )
);
stock.push(
  new Producto(
    "Halo Lunar",
    "Cuidado facial",
    "Agua micelar",
    "Kamikaze",
    2160,
    14,
    "fotoproducto-aguamicelar.jpg"
  )
);

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
            src="../img/fotosproductos/${producto.imagen}"
            class="card-img-top img-fluid"
            alt="${producto.nombre}"
          />
          <div class="card-body text-center">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text card-text">$${producto.precio}</p>
            <p>
              <strong>4</strong> cuotas sin interés de
              <strong>$2.462,50</strong>
            </p>
            <button
              id="btnAgregarCarrito-${producto.id}"

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
}

function mostrarCarrito() {
  let tablaCarrito = document.getElementById("tableCarrito");
  tablaCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    tablaCarrito.innerHTML =
      tablaCarrito.innerHTML +
      `
     
    <tbody class="tbody" >
      <tr>
      <th scope="row">   
      <img
      src="../img/fotosproductos/${producto.imagen}"
      class=""
      alt="${producto.nombre}"
      width="100"
      height="100"
    />
     </th>
      </tr>
      <tr class="tr">
      <th scope="row" class="paragraph">${producto.nombre} $ ${producto.precio} </th>
      </tr>
      <tr class="tr">
      <th scope="row" class="paragraph">Cantidad: </th>
      </tr>
      <tr class="tr">
      <th scope="row" class="paragraph"><button type="button" class="btn btn-outline-dark">+</button>
     <button type="button" class="btn btn-outline-dark">-</button></th>
      </tr>
    </tbody>
      `;
  });
  tablaCarrito.innerHTML =
    tablaCarrito.innerHTML +
    `
   <thead class="thead">
   <tr class="tr">
     <th scope="col" class= "title">Carrito de Compras</th>
   </tr>
 </thead>
 <tbody class="tbody" >
 </tr>
      <tr class="tr">
      <th scope="row" class="paragraph-total">TOTAL: $ ${total}</th>
      </tr>
 </tbody>
   `;
}

function clickAgregarCarrito() {
  stock.forEach((producto) => {
    let btnAgregarCarrito = document.getElementById(
      `btnAgregarCarrito-${producto.id}`
    );
    btnAgregarCarrito.addEventListener("click", () => {
      carrito.push({
        imagen: producto.imagen,
        nombre: producto.nombre,
        precio: producto.precio,
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      total = carrito.reduce((acc, item) => acc + producto.precio, 0);
    });
    console.log(carrito);
  });
}

function abrirCarrito() {
  const verCarrito = document.querySelector("#verCarrito");
  verCarrito.addEventListener("click", mostrarCarrito);
}
/* 
localStorage.setItem("stock", JSON.stringify(stock));

function traerItems() {
  stock = JSON.parse(localStorage.getItem("stock")) || [];
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
}

function cargaDelDOM() {
  document.addEventListener("DOMContentLoaded", traerItems);
}

cargaDelDOM(); */
dibujarProductos();
clickAgregarCarrito();
abrirCarrito();
