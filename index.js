//////////////CREACION DE PRODUCTOS////////////////////



let todosLosProductos = []

function agregarProducto(nombre, precio, prenda, genero) {
    let nuevoProducto = {
        nombre: nombre,
        precio: precio,
        prenda: prenda,
        genero: genero,
    }
    todosLosProductos.push(nuevoProducto)
}

agregarProducto("Zapatillas Adi2000 de hombre", 160000, "calzado", "hombre");
agregarProducto("Zapatillas Jordan Air 4 Retro de hombre", 320000, "calzado", "hombre");
agregarProducto("Zapatillas Puma Suede XL de Hombre", 170000, "calzado", "hombre");
agregarProducto("Pantalon Adidas Originals Essentials de hombre", 75000, "indumentaria", "hombre");
agregarProducto("Remera Jordan Air de hombre", 60000, "indumentaria", "hombre");
agregarProducto("Campera Nike Tech Fleece de hombre", 190000, "indumentaria", "hombre");
agregarProducto("Zapatillas Jordan Air 1 de mujer", 220000, "calzado", "mujer");
agregarProducto("Zapatillas Nike AF1 Shadow de mujer", 260000, "calzado", "mujer");
agregarProducto("Zapatillas Adidas Originals Campus 00s de mujer", 170000, "calzado", "mujer");
agregarProducto("Chaleco Nike Classic de mujer", 140000, "indumentaria", "mujer");
agregarProducto("Short Jordan Classic de mujer", 85000, "indumentaria", "mujer");
agregarProducto("Buzo Champion de mujer", 52000, "indumentaria", "mujer");
agregarProducto("Zapatillas Adidas Originals Superstar de niño", 84000, "calzado", "niños");
agregarProducto("Zapatillas Puma Suede Classic XXI de niños", 60000, "calzado", "niños");
agregarProducto("Zapatillas Nike Air Force 1 06", 55000, "calzado", "niños");
agregarProducto("Pantalon Jordan Essentials de niño", 58000, "indumentaria", "niños");
agregarProducto("Remera Adidas Originals Trefoil de niños", 45000, "indumentaria", "niños");
agregarProducto("Remera Nike Crop de niño", 35000, "indumentaria", "niños");






////////////DIVISION DE LOS PRODUCTOS/////////////

//////CALZADO/////////

let calzado = todosLosProductos.filter((el) => el.prenda == "calzado");
let nombresDeCalzado = calzado.map((producto) => { return producto.nombre });
let precioCalzado = calzado.map((producto) => { return producto.precio });
let listaCalzado = "";
for (let i = 0; i < nombresDeCalzado.length; i++) {
    listaCalzado += (i + 1) + ". " + nombresDeCalzado[i] + " $" + precioCalzado[i] + "\n";
}

/////////////INDUMENTARIA///////////////


let indumentaria = todosLosProductos.filter((el) => el.prenda == "indumentaria");
let nombreIndumentaria = indumentaria.map((producto) => { return producto.nombre });
let precioIndumentaria = indumentaria.map((producto) => { return producto.precio });
let listaIndumentaria = "";
for (let i = 0; i < nombreIndumentaria.length; i++) {
    listaIndumentaria += (i + 1) + ". " + nombreIndumentaria[i] + " $" + precioIndumentaria[i] + "\n";
}





////////////CICLOS/////////////


function carritoCalzado(a) {
    let productoAniadido = "-" + nombresDeCalzado[a] + " $" + precioCalzado[a];
    carritoDeCompras.push(productoAniadido);
    total = total + precioCalzado[a]
    alert("Añadiste: " + nombresDeCalzado[a] + "  $"+ precioCalzado[a])
}
function carritoIndumentaria(a) {
    let productoAniadido = "-" + nombreIndumentaria[a] + " $" + precioIndumentaria[a];
    carritoDeCompras.push(productoAniadido);
    total = total + precioIndumentaria[a]
    alert("Añadiste: " + nombreIndumentaria[a] + "  $"+ precioIndumentaria[a]);
}




let option;
let total = 0;
let carritoDeCompras = []



while (option !== 0) {
    option = Number(prompt("Bienvenido a Pakani. Ingrese la opción sobre la cual está interesado: \n 1. Calzado \n 2. Indumentaria \n 3. Finalizar compra \n 0. Salir"));
    if (option === 1) {
        let valor = Number(prompt("Estos son los productos disponibles: \n" + listaCalzado + "0. Salir"));
        switch (valor) {
            case 1:
                carritoCalzado(0);
                break;
            case 2:
                carritoCalzado(1);
                break;
            case 3:
                carritoCalzado(2);
                break;
            case 4:
                carritoCalzado(3);
                break;
            case 5:
                carritoCalzado(4);
                break;
            case 6:
                carritoCalzado(5);
                break;
            case 7:
                carritoCalzado(6);
                break;
            case 8:
                carritoCalzado(7);
                break;
            case 9:
                carritoCalzado(8);
                break;
        }
    } else if (option === 2) {
        let valorB = Number(prompt("Estos son los productos disponibles: \n" + listaIndumentaria + "0. Salir"));
        switch (valorB) {
            case 1:
                carritoIndumentaria(0);
                break;
            case 2:
                carritoIndumentaria(1);
                break;
            case 3:
                carritoIndumentaria(2);
                break;
            case 4:
                carritoIndumentaria(3);
                break;
            case 5:
                carritoIndumentaria(4);
                break;
            case 6:
                carritoIndumentaria(5);
                break;
            case 7:
                carritoIndumentaria(6);
                break;
            case 8:
                carritoIndumentaria(7);
                break;
            case 9:
                carritoIndumentaria(8);
                break;
        }
    } else if (option === 3) {
        if (total === 0) {
            alert("No has ingresado nada al carrito");
        } else if (total !== 0) {
            alert(carritoDeCompras.join("\n")+ "\n \n El total a pagar es $" + total + " \n Muchas Gracias por la compra. Hasta luego");
            break;
        }
    } else if (option === 0) {
        alert("Muchas Gracias por visitarnos. Nos vemos pronto");
    }
}
