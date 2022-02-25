/* plasmar productos al html */
const contenedorProductos=document.querySelector(`.items`)
arrAnte.forEach((producto)=>{
    const divs=document.createElement(`div`);
    divs.classList.add("card",`${producto.marca}`, "col-xxl-4","col-xl-3", "productos-impresos", "m-5");
    divs.id= `${producto.id}`;

    divs.innerHTML=
    `
    <div class="card-body ${producto.marca} models">
        <h4 class="card-title d-flex justify-content-center">${producto.marca.toUpperCase()}</h4>
        <img src=${producto.img} class="card-img-top" alt="">
        <p class="modelo card-text d-flex justify-content-center">Modelo: ${producto.modelo}</p>
        <p class="card-text d-flex justify-content-center">Año: ${producto.ano}</p>
        <h5 class="card-text d-flex justify-content-center">Precio: $<span class="precioHtml">${producto.precio}</span></h5>
        <a class="custom-btn btn-15 botonItems d-flex justify-content-center" data-id="${producto.id}">Añadir</a>
        <span class="invisible">${producto.stock}</span>
    </div>
    `
    contenedorProductos.appendChild(divs);
})

/* ABRIR Y CERRAR MODEL CARRO */
const modalAbrir=document.getElementById(`modal-abrir`);
const modalCerrar=document.getElementById(`modal-cerrar`);
const modalContainer=document.getElementById("modal-containerr");
const btn__comprar=document.getElementById("btnComprar");


const activarModal=()=> {modalContainer.classList.toggle(`modal-active`)};
modalAbrir.onclick=activarModal;
modalCerrar.onclick=activarModal;
btn__comprar.onclick=activarModal;

/* ABRIR Y CERRAR MODEL FORMULARIO */
function abrirFormu(){
    $("#modal-formulario").show();
    totalFormu.innerHTML=totalCarro;
};
function cerrarFormu(){
    $("#modal-formulario").hide();
};

/* local storage y ajax */

arrClientes=[];
function obtenerDatos(){
    let nombre=document.querySelector("#nombre").value.toUpperCase();
    let apellido=document.querySelector("#apellido").value.toUpperCase();
    let mail=document.querySelector("#mail").value;
    let tel= document.querySelector("#telefono").value;
    document.querySelector(".nombreApellido").innerHTML=nombre+" "+apellido;
    document.querySelector(".email").innerHTML=mail;

    let clientes={
        nombre: nombre,
        apellido:apellido,
        mail:mail,
        tel:tel,
    };
    localStorage.setItem("compradores", JSON.stringify(clientes));

}
function local(){
    let compras=JSON.parse(localStorage.getItem("compradores"));
    arrClientes.push(compras);
    console.log(arrClientes);

}




