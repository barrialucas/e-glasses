/* variables */
const itemsCarro = document.querySelector(".items");
let contenedorProductosCarro = document.querySelector(".items-carro");
let precioTotal = document.querySelector(".total");

let btnFormu = document.querySelector("#btnComprar");
let cerrarFor = document.querySelector(".ax");
let totalFormu = document.querySelector(".totalFormu");
let comprar2 = document.querySelector("#btnCompra2");



let comprarItems = [];
let totalCarro = 0;

/* funciones */
/* clicks botones */
cargarAcciones();

function cargarAcciones() {
    itemsCarro.addEventListener("click", agregarProdcutos);
    contenedorProductosCarro.addEventListener("click", borrarProducto);
    btnFormu.addEventListener("click", abrirFormu);
    cerrarFor.addEventListener("click", cerrarFormu);
};
/* formulario de compra */
function verificar() {
    comprar2.addEventListener("click", compraConfirmada);
    comprar2.addEventListener("click", cerrarFormu);
    comprar2.addEventListener("click", obtenerDatos);
    comprar2.addEventListener("click", local);
};

function compraConfirmada() {
    $("#seguro").show();
    setTimeout(function () {
        $("#seguro").hide();
    }, 2000);

    comprarItems.length = 0;
    borrarHtml();
    totalCarro = 0;
    precioTotal.innerHTML = totalCarro;
};

/* agregar productos */
function agregarProdcutos(e) {
    e.preventDefault();
    if (e.target.classList.contains("botonItems")) {
        const mostrarProductos = e.target.parentElement;
        cargarItems(mostrarProductos);

    }
};


/* borrar productos */
function borrarProducto(e) {

    if (e.target.classList.contains("borrar-producto")) {
        const borrarId = e.target.getAttribute("data-id")

        comprarItems.forEach(valor => {
            if (valor.id == borrarId) {
                let restarPrecio = valor.precio * valor.cantidad;
                totalCarro = totalCarro - restarPrecio;
            }

        });
        comprarItems = comprarItems.filter(producto => producto.id !== borrarId);
    }
    if (comprarItems.length == 0) { //total=0
        precioTotal.innerHTML = 0;
    }
    cargarHtml();
}


function cargarItems(producto) {
    const infoProductos = {
        marca: producto.querySelector("div h4").textContent,
        modelo: producto.querySelector(".modelo").textContent,
        imagen: producto.querySelector("div img").src,
        precio: producto.querySelector(".precioHtml").textContent,
        id: producto.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
        stock: producto.querySelector(".invisible").textContent,
    }

    /* añado +1 al al carro */
    const salida = comprarItems.some((producto) => producto.id === infoProductos.id);
    if (salida) {
        const verificacion = comprarItems.map(producto => {
            if (producto.id === infoProductos.id) {
                if (producto.cantidad < producto.stock) {
                    producto.cantidad++;
                    mensajeAgregado();
                }
                if (producto.cantidad >= producto.stock) { //stock
                    producto.cantidad = producto.stock;
                    mensajeStock();
                }
                return producto;
            } else {
                return producto;
            }
        });
        comprarItems = [...verificacion];
    } else {
        comprarItems = [...comprarItems, infoProductos];
    };
    /* suma del total */
    totalCarro = parseFloat(totalCarro) + parseFloat(infoProductos.precio);
    
    cargarHtml();
};


/* plasmar al carro */
function cargarHtml() {
    borrarHtml();
    comprarItems.forEach(producto => {
        const {imagen,marca,modelo,precio,id,cantidad,stock} = producto;
        const rows = document.createElement("div");
        rows.classList.add("card-body", "m-2");
        rows.innerHTML =
            `<div class="card">
        <div class="row g-0">
        <div class="col-xl-4 col-xxl-4 d-flex align-items-center">
          <img src="${imagen}" class="img-fluid rounded-end" alt="...">
        </div>

        <div class="col-xl-6 col-xxl-6">
          <div class="card-body">
            <h4 class="card-title d-flex justify-content-center">${marca}</h4>
            <h6 class="card-text d-flex justify-content-center">${modelo}</h6>
            <p class="card-text d-flex justify-content-center">Precio $${precio}</p>
            <hr>
            <h5 class="card-text d-flex justify-content-center">Cantidad:${cantidad}</h5>
            <span class="invisible">${stock}</span>
          </div>
        </div>

        <div class="col-xl-2 col-xxl-2 borrar-producto d-flex align-items-center" data-id="${id}">
            <a class="fas fa-trash-alt borrar-producto"></a>
        </div>
      </div>
    </div>
    </div>
        `;

        contenedorProductosCarro.appendChild(rows)

        precioTotal.innerHTML = totalCarro;

    });

};

function borrarHtml() {
    contenedorProductosCarro.innerHTML = "";
}


/* MENSAJES/ALERTAS */
const mensajeAgregado = () => { //mensaje cuando se agrega un producto al carro
    $("#contenedorMensajeAgregado").append(
        `<div class="confirmacion">
        <p>Producto agregado al carrito<p>
    </div>`
    );
    setTimeout(function () {
        $(".confirmacion").remove();
    }, 2000);
};
const mensajeStock = () => { //mensaje cuando agota el stock
    $("#contenedorMensajeAgregado2").append(
        `<div class="confirmacion2">
      <p>Stock agotado!<p>
  </div>`
    );
    setTimeout(function () {
        $(".confirmacion2").remove();
    }, 3000);

};