let id, name, price, category;
let item;
let more;
let total;
let pluralprice;

// Para el carrito de compras usamos un array, donde guardamos los productos que el comprador selecciona
const cart = [];

//funcion constructora para objetos personalizados
function product(id, name, image, price, category, quantityInCart, pluralprice) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = Number(price);
    this.category = category;
    this.quantityInCart = quantityInCart;
    this.pluralprice = pluralprice;
}

//objetos, los diferencio por categoria
const product1 = new product("01-PikachuT", "Pikachu T-shirt","./Images/Pikachu_Tshirt.jpg", 17, "Pokemon", 0, 17);
const product2 = new product("02-CharmanderT", "Charmander T-shirt","./Images/Charmander_Tshirt.jpg", 16, "Pokemon", 0, 16);
const product3 = new product("03-BulbasaurT", "Bulbasaur T-shirt","./Images/Bulbasaur_Tshirt.jpg", 15, "Pokemon", 0, 15);
const product4 = new product("04-SquirtleT", "Squirtle T-shirt","./Images/Squirtle_Tshirt.jpg", 16, "Pokemon", 0, 16);
const product5 = new product("05-BatmanT", "Batman T-shirt","./Images/Batman_Tshirt.jpg", 17, "Heroes", 0, 17);
const product6 = new product("06-SupermanT", "Superman T-shirt","./Images/Superman_Tshirt.jpg", 16, "Heroes", 0, 16);
const product7 = new product("07-FlashT", "Flash T-shirt", 7500, "Heroes", 0, 0);
const product8 = new product("08-PokeballH", "Pokeball Hoodie", 11000, "Pokemon", 0, 0);
const product9 = new product("09-PikachuH", "Pikachu Hoodie", 12000, "Pokemon", 0, 0);
const product10 = new product("10-BatmanH", "Batman Hoodie", 12000, "Heroes", 0, 0);
const product11 = new product("11-RobinH", "Robin Hoodie", 10000, "Heroes", 0, 0);
const product12 = new product("12-SupermanH", "Superman Hoodie", 11000, "Heroes", 0, 0);
const product13 = new product("13-FlashH", "Flash Hoodie", 11500, "Heroes", 0, 0);
//


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
/* FIN ELEMENTOS TRAIDOS CON DOM */


/* FUNCION PARA PUSHEAR LOS PRODUCTOS A UN ARRAY(products) Y CARGARLOS A LA PAGINA  */
const products=[];

function push(products,product1, product2, product3, product4,product5, product6){
    products.push(product1, product2, product3, product4,product5, product6);
    chargeProduct(products);
}
/* FIN FUNCION */

/* FUNCION PARA CARGAR PRODUCTOS A LA PAGINA */
function chargeProduct(products){
    products.forEach(product => {
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
    });
    chargeButtons();
}
/* FIN FUNCION */


/* fUNCION PARA ACTUALIZAR BOTONES DE COMPRA (y asignar evento) */
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

    if( cart.some((element) => element.id === idProduct) ){
        const cartUbication = cart.indexOf((element) => element.id === idProduct);
        productSelected.quantityInCart = productSelected.quantityInCart + 1;
        productSelected.pluralprice = ( productSelected.price * productSelected.quantityInCart );
        cart[cartUbication] = productSelected.quantityInCart;
        cart[cartUbication] = productSelected.pluralprice;
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
    /* console.log(total); */
}
/* FIN FUNCION */

/* FUNCION PARA MOSTRAR CARRITO */
function showcart(){
    const cartOBJ = localStorage.getItem("Products to buy");
    const new_cart= JSON.parse(cartOBJ);
    console.log(new_cart);

    if (new_cart.length > 0){
        cart_empty.classList.add("hidden_text");
        cart_contain.classList.remove("hidden_text");

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
                <button type="button" class="addProduct" id="${product.id}"> Add to cart </button>
            </div>
        `
        cart_container.append(productInCart);
    })
        } else {
        cart_empty.classList.remove("hidden_text");
        }
}




/* ACTIVACION DE LA PAGINA */
push(products,product1, product2, product3, product4,product5, product6, product7);






if (new_cart.length > 0){
    cart= new_cart;
} else {
cart=[]
}