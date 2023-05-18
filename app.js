let id, name, price, category;
let selection, selection2, selection3;
let item;
let more;
let total;
//let creditcart;
let creditpay;

// Para el carrito de compras usamos un array, donde guardamos los productos que el comprador selecciona
const cart = [];

//funcion constructora para objetos personalizados
function product(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.category = category;
}

//objetos, los diferencio por categoria
const product1 = new product(1, "Pikachu T-shirt", 17, "Pokemon");
const product2 = new product(2, "Charmander T-shirt", 16, "Pokemon");
const product3 = new product(3, "Bulbasaur T-shirt", 15, "Pokemon");
const product4 = new product(4, "Squirtle T-shirt", 16, "Pokemon");
const product5 = new product(5, "Batman T-shirt", 17, "Heroes");
const product6 = new product(6, "Superman T-shirt", 16, "Heroes");
const product7 = new product(7, "Flash T-shirt", 7500, "Heroes");
const product8 = new product(8, "Pokeball Hoodie", 11000, "Pokemon");
const product9 = new product(9, "Pikachu Hoodie", 12000, "Pokemon");
const product10 = new product(10, "Batman Hoodie", 12000, "Heroes");
const product11 = new product(11, "Robin Hoodie", 10000, "Heroes");
const product12 = new product(12, "Superman Hoodie", 11000, "Heroes");
const product13 = new product(13, "Flash Hoodie", 11500, "Heroes");

//asigno a los objetos un elemento de la pagina


//pusheo los productos a distintos array, divididos por categoria
const pokemonTshirt = [];
pokemonTshirt.push(product1, product2, product3, product4);

const pokemonHoodie = [];
pokemonHoodie.push(product8, product9);

const heroesTshirt = [];
heroesTshirt.push(product5, product6, product7);

const heroesHoodie = [];
heroesHoodie.push(product10, product11, product12, product13);

//MENSAJE CARRITO VACIO
/* 
while(quantity==0 && quantity2==0 && quantity3==0 && quantity4==0 && quantity5==0 && quantity6==0){
    const cartMessage = document.querySelector("#cart_message").textContent = "Your cart is empty";

}
 */

//creo la variable para traer la ubicacion de cada producto dentro del carrito en HTML
const shop_cart1 = document.querySelector("#chart_product1");
const shop_cart2 = document.querySelector("#chart_product2");
const shop_cart3 = document.querySelector("#chart_product3");
const shop_cart4 = document.querySelector("#chart_product4");
const shop_cart5 = document.querySelector("#chart_product5");
const shop_cart6 = document.querySelector("#chart_product6");

/* BOTONES PARA AÑADIR AL CARRITO */
//traigo las variables de HMTL a JS
const button1 = document.querySelector("#buyButton1");
const button2 = document.querySelector("#buyButton2");
const button3 = document.querySelector("#buyButton3");
const button4 = document.querySelector("#buyButton4");
const button5 = document.querySelector("#buyButton5");
const button6 = document.querySelector("#buyButton6");


//asigno los eventos a cada boton y que se sumen si el producto se repite en el carrito

let quantity = 0;
let quantity2 = 0;
let quantity3 = 0;
let quantity4 = 0;
let quantity5 = 0;
let quantity6 = 0;

/* PRODUCTO 1 */
button1.addEventListener("click", () => {
    cart.push(product1);
    quantity = quantity + 1;
    if(quantity > 1){
        let old_purchase = document.querySelector("#firstPurchase1");
        old_purchase.remove();
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase">
            <h3> Name: ${product1.name}</h3>
            <p> Price: $ ${product1.price}</p>
            <p> Quantity: ${quantity}</p>
            <button class="btn btn-outline-info" id="add1"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart1.append(purchase); 
    } 
    else if(quantity = 1){
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase1">
            <h3> Name: ${product1.name}</h3>
            <p> Price: $ ${product1.price}</p>
            <p> Quantity: ${quantity}</p>
            <button class="btn btn-outline-info" id="add1"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart1.append(purchase);
    }
})


/* PRODUCTO 2 */
button2.addEventListener("click", () => {
    cart.push(product2);
    quantity2 = quantity2 + 1;
    if(quantity2 > 1){
        let old_purchase = document.querySelector("#firstPurchase2");
        old_purchase.remove();
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase2">
            <h3> Name: ${product2.name}</h3>
            <p> Price: $ ${product2.price}</p>
            <p> Quantity: ${quantity2}</p>
            <button class="btn btn-outline-info" id="add2"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart2.append(purchase); 
    } 
    else if(quantity2 = 1){
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase2">
            <h3> Name: ${product2.name}</h3>
            <p> Price: $ ${product2.price}</p>
            <p> Quantity: ${quantity2}</p>
            <button class="btn btn-outline-info" id="add2"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart2.append(purchase);
    }
    })


/* PRODUCTO 3 */
button3.addEventListener("click", () =>{
    cart.push(product3);
    quantity3 = quantity3 + 1;
    if(quantity3 > 1){
        let old_purchase = document.querySelector("#firstPurchase3");
        old_purchase.remove();
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase3">
            <h3> Name: ${product3.name}</h3>
            <p> Price: $ ${product3.price}</p>
            <p> Quantity: ${quantity3}</p>
            <button class="btn btn-outline-info" id="add3"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart3.append(purchase); 
    } 
    else if(quantity3 = 1){
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase3">
            <h3> Name: ${product3.name}</h3>
            <p> Price: $ ${product3.price}</p>
            <p> Quantity: ${quantity3}</p>
            <button class="btn btn-outline-info" id="add3"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart3.append(purchase);
    }
    })


/* PRODUCTO 4 */
button4.addEventListener("click", () => {
    cart.push(product4);
    quantity4 = quantity4 + 1;
    if(quantity4 > 1){
        let old_purchase = document.querySelector("#firstPurchase4");
        old_purchase.remove();
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase4">
            <h3> Name: ${product4.name}</h3>
            <p> Price: $ ${product4.price}</p>
            <p> Quantity: ${quantity4}</p>
            <button class="btn btn-outline-info" id="add4"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart4.append(purchase); 
    } 
    else if(quantity4 = 1){
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase4">
            <h3> Name: ${product4.name}</h3>
            <p> Price: $ ${product4.price}</p>
            <p> Quantity: ${quantity4}</p>
            <button class="btn btn-outline-info" id="add4"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart4.append(purchase);
    }
    })


/* PRODUCTO 5 */
button5.addEventListener("click", () => {
    cart.push(product5);
    quantity5 = quantity5 + 1;
    if(quantity5 > 1){
        let old_purchase = document.querySelector("#firstPurchase5");
        old_purchase.remove();
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase5">
            <h3> Name: ${product5.name}</h3>
            <p> Price: $ ${product5.price}</p>
            <p> Quantity: ${quantity5}</p>
            <button class="btn btn-outline-info" id="add5"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart5.append(purchase); 
    } 
    else if(quantity5 = 1){
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase5">
            <h3> Name: ${product5.name}</h3>
            <p> Price: $ ${product5.price}</p>
            <p> Quantity: ${quantity5}</p>
            <button class="btn btn-outline-info" id="add5"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart5.append(purchase);
    }
    })


/* PRODUCTO 6 */
button6.addEventListener("click", () => {
    cart.push(product6);
    quantity6 = quantity6 + 1;
    if(quantity6 > 1){
        let old_purchase = document.querySelector("#firstPurchase6");
        old_purchase.remove();
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase6">
            <h3> Name: ${product6.name}</h3>
            <p> Price: $ ${product6.price}</p>
            <p> Quantity: ${quantity6}</p>
            <button class="btn btn-outline-info" id="add6"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart6.append(purchase); 
    } 
    else if(quantity6 = 1){
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase6">
            <h3> Name: ${product6.name}</h3>
            <p> Price: $ ${product6.price}</p>
            <p> Quantity: ${quantity6}</p>
            <button class="btn btn-outline-info" id="add6"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart6.append(purchase);
    }
    })

//botones para añadir producto desde el carrito de compras
    const add_button1 = document.querySelector("#add1");
    const add_button2 = document.querySelector("#add2");
    const add_button3 = document.querySelector("#add3");
    const add_button4 = document.querySelector("#add4");
    const add_button5 = document.querySelector("#add5");
    const add_button6 = document.querySelector("#add6");

//eventos de los botones para añadir desde el carrito de compras

/* BOTON ADD PRODUCTO 1 */
add_button1.addEventListener("click", () => {
    cart.push(product1);
    quantity = quantity + 1;
/*     if(quantity > 1){
        let old_purchase = document.querySelector("#firstPurchase1");
        old_purchase.remove(); */
        let purchase = document.createElement("div");
        purchase.innerHTML = 
            `
            <div id="firstPurchase">
            <h3> Name: ${product1.name}</h3>
            <p> Price: $ ${product1.price}</p>
            <p> Quantity: ${quantity}</p>
            <button class="btn btn-outline-info" id="add1"> Add </button>
            <button class="btn btn-outline-danger"> Remove One </button>
            </div>
            `
        shop_cart1.append(purchase); 
    }
)