let id, name, price, category, quantityInCart, pluralprice;
let item;
let more;
let total;

/* ELEMENTOS TRAIDOS CON DOM */
//contenedor de productos
const product_container = document.querySelector("#product_container");
//botones de compra
let buttonAdd = document.querySelectorAll(".addProduct");
//contenedor de carrito de compra
const cart_container = document.querySelector("#cart_container");
//contenedor frase "carrito contiene"
const cart_contain = document.querySelector("#cart_contain");
//contenedor frase "carrito vacio"
const cart_empty = document.querySelector("#cart_empty");
//contenedor de formulario de comprador
const form_container = document.querySelector("#form_container");
//botones para eliminar del carrito
let buttonRemove = document.querySelectorAll(".removeProduct");
//boton de confirmar compra en formulario
const buttonConfirm = document.querySelector("#buttonConfirm");
/* FIN ELEMENTOS TRAIDOS CON DOM */

// Para el carrito de compras usamos un array, donde guardamos los productos que el comprador selecciona
/* let cart = []; */

// Variable donde guardamos los elementos del local storage
let uploadCart = JSON.parse(localStorage.getItem("Products to buy"));

//Array donde cargamos los productos de la tienda
const products=[];


/* INICIO DE FUNCIONES */
/* FUNCION PARA TRAER LOS PRODUCTOS DEL ARCHIVO DATA.JSON, CARGAR LA TIENDA Y PONERLOS EN EL ARRAY DE PRODUCTOS */
const askForProducts = async () => {
    const resp = await fetch(`./data.json`);
    const data = await resp.json();

    data.forEach(product => {
        const charge = document.createElement("div");
        charge.classList.add("product");
        charge.innerHTML=
        `
        <img class="image" src="${product.image}" alt="${product.name}">
            <div class="card-body">
                <div id="product_name"> ${product.name}</div>
                <p id="product_price"> Price: $${product.price}</p>
                <button type="button" class="addProduct" id="${product.id}"> Add to cart </button>
            </div>
        `
        product_container.append(charge);
        products.push(product);
    });
    chargeButtons();
}
/* FIN DE FUNCION */


/* FUNCION PARA ACTUALIZAR BOTONES DE COMPRA (y asignar evento) */
function chargeButtons(){
    buttonAdd = document.querySelectorAll(".addProduct");
    buttonAdd.forEach(button =>{
        button.addEventListener("click", addToCart);
    })
}
/* FIN FUNCION */


/* FUNCION PARA AGREGAR AL CARRITO, la cual activamos con el evento del "click" */
function addToCart(event){
    const idProduct = event.currentTarget.id;
    const productSelected = products.find((selection) => selection.id === idProduct);

/* Animacion toastify, de producto que se agrega al carrito */
    Toastify({
        text: `You added ${productSelected.name} to your cart`,
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
/* Fin de animacion toastify */

    if( cart.some((element) => element.id === idProduct) ){
        const cartUbication = cart.findIndex((element) => element.id === idProduct);              //debo usar la cantidad guardada en el carrito, ya que si uso la del producto
        cart[cartUbication].quantityInCart = cart[cartUbication].quantityInCart + 1;                //siempre sera 0, y no podre sumar productos que vengan del Local Storage
        productSelected.pluralprice = ( productSelected.price * cart[cartUbication].quantityInCart );
        cart[cartUbication].pluralprice = productSelected.pluralprice;
    } else {
        productSelected.quantityInCart = 1;
        cart.push(productSelected);
    }
    const cartSTR = JSON.stringify(cart);
    localStorage.setItem("Products to buy", cartSTR);
uploadTotalAmount();
showcart();
}
/* FIN FUNCION */


/* FUNCION PARA SUMA FINAL DE LA COMPRA */
function uploadTotalAmount(){
    total = cart.reduce ((acumulator, product) => { return acumulator + product.pluralprice},0);
}
/* FIN FUNCION */


/* FUNCION PARA MOSTRAR CARRITO */
function showcart(){
    const cartOBJ = localStorage.getItem("Products to buy");
    const new_cart= JSON.parse(cartOBJ);
    console.log(new_cart);

    if (new_cart){
        cart_empty.classList.add("hidden_text");
        cart_contain.classList.remove("hidden_text");
        form_container.classList.remove("hidden_text");

        cart_container.innerHTML = [];

        new_cart.forEach(product => {
        const productInCart = document.createElement("div");
        productInCart.classList.add("product");
        productInCart.innerHTML=
        `
        <img class="image" src="${product.image}" alt="${product.name}">
            <div class="card-body">
                <div id="product_name"> ${product.name}</div>
                <div id="quantity"> Quantity: ${product.quantityInCart} </div>
                <p id="product_price"> Price: $${product.price}</p>
                <p> Subtotal: $${product.pluralprice}</p>
                <button type="button" class="removeProduct" id="${product.id}"> Remove </button>
            </div>
        `
        cart_container.append(productInCart);
    })
        } else {
        cart_empty.classList.remove("hidden_text");
        }
    chargeButtonsRemove();
}
/* FIN FUNCION */


/* FUNCION PARA CARGAR LOS BOTONES PARA REMOVER PRODUCTO DEL CARRITO DE COMPRA */
function chargeButtonsRemove(){
    buttonRemove = document.querySelectorAll(".removeProduct");
    buttonRemove.forEach(button =>{
        button.addEventListener("click", removeProduct);
    })
}
/* FIN FUNCION */


/* FUNCION PARA ELIMINAR PRODUCTO DEL CARRITO */
function removeProduct(event){
    const idProduct = event.currentTarget.id;
    let productToRemove = cart.find((selection) => selection.id === idProduct);
    const cartUbication = cart.findIndex((element) => element.id === idProduct);
    cart.splice(cartUbication,1);

/* Animacion toastify, de producto que descartamos del carrito */
Toastify({
    text: `You removed ${productToRemove.name} from your cart`,
    offset: {
        x: 50,
        y: 10
    },
}).showToast();
/* Fin de animacion toastify */

console.log(cart);
const cartSTR= JSON.stringify(cart);
localStorage.setItem("Products to buy", cartSTR);
showcart();
}
/* FIN FUNCION */



/* ACTIVACION DE LA PAGINA */
if (uploadCart == null){
    cart = [];
} else {
    cart = uploadCart;
    showcart();
}

askForProducts();