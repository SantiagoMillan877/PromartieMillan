class Productos{
    constructor (id, nombre, precio, tamaño){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tamaño = tamaño;
    }
}
const array = [];
array.push (new Productos ("1", "Alcaparras", 200, "250 Gr")) ;
array.push (new Productos ("2", "Aceitunas Verdes Descarozadas", 1500, "2 Kg")) ;
array.push (new Productos ("3", "Pepinillos en Vinagre", 1600, "2 Kg")) ;
array.push (new Productos ("4", "Aceitunas Rellenas en Aceite", 1500, "1 Kg")) ;
array.push (new Productos ("5", "Aceitunas Rellenas en Aceite", 300, "250 Gr")) ;
array.push (new Productos ("6", "Salsa de Tomate Picante", 200, "250 mL.")) ;
array.push (new Productos ("7", "Pickles en Vinagre", 150, "250 Gr")) ;
array.push (new Productos ("8", "Aceitunas Verdes T00", 1800, "2 Kg")) ;
let Products = JSON.stringify (array)
sessionStorage.setItem("Productos", Products)
let productosAdquiridos = []
$("#Producto1").click (() => compra (1))
$("#Producto2").click (() => compra (2))
$("#Producto3").click (() => compra (3))
$("#Producto4").click (() => compra (4))
$("#Producto5").click (() => compra (5))
$("#Producto6").click (() => compra (6))
$("#Producto7").click (() => compra (7))
$("#Producto8").click (() => compra (8))
function compra (id) {
    let producto = array.find ((array => array.id == id))
    productosAdquiridos.push (producto);
    carrito();
}
function carrito () {
    let precioTotal = 0
    $("#listaproductos").empty();
    for (const producto of productosAdquiridos){
        $("#listaproductos").append(`
        <li class="desvanecer"> ${producto.nombre} $ ${producto.precio}
        </li>`);
        precioTotal += producto.precio;
    }
    $(".desvanecer").fadeOut("fast", () => {
        $(".desvanecer").fadeIn(1000);
    })
    $("#Preciototal").empty()
    $("#Preciototal").append(`Total a pagar: ${precioTotal}`);
}