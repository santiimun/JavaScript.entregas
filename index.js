//////////////CREACION DE PRODUCTOS////////////////////



let todosLosProductos = []

function agregarProducto(nombre, precio, prenda, genero, img) {
    let nuevoProducto = {
        nombre: nombre,
        precio: precio,
        prenda: prenda,
        genero: genero,
        img: img,
    }
    todosLosProductos.push(nuevoProducto)
}

agregarProducto("Zapatillas Adi2000 de hombre", 160000, "calzado", "hombre", 'assets/adi2000.webp');
agregarProducto("Zapatillas Jordan Air 4 Retro de hombre", 320000, "calzado", "hombre","assets/jordanretro4.webp");
agregarProducto("Zapatillas Puma Suede XL de Hombre", 170000, "calzado", "hombre","assets/suedexl.webp");
agregarProducto("Pantalon Adidas Originals Essentials de hombre", 75000, "indumentaria", "hombre","assets/Pantalon-Adidas-Originals.webp");
agregarProducto("Remera Jordan Air de hombre", 60000, "indumentaria", "hombre","assets/remerajordan.webp");
agregarProducto("Campera Nike Tech Fleece de hombre", 190000, "indumentaria", "hombre","assets/camperatech.webp");
agregarProducto("Zapatillas Jordan Air 1 de mujer", 220000, "calzado", "mujer","assets/jordan1mujer.webp");
agregarProducto("Zapatillas Nike AF1 Shadow de mujer", 260000, "calzado", "mujer","assets/af1shadow.webp");
agregarProducto("Zapatillas Adidas Originals Campus 00s de mujer", 170000, "calzado", "mujer","assets/campus00mujer.webp");
agregarProducto("Chaleco Nike Classic de mujer", 140000, "indumentaria", "mujer","assets/chaleconikemujer.webp");
agregarProducto("Short Jordan Classic de mujer", 85000, "indumentaria", "mujer","assets/shortjordan.webp");
agregarProducto("Buzo Champion de mujer", 52000, "indumentaria", "mujer", "assets/buzochampionmujer.webp");
agregarProducto("Zapatillas Adidas Superstar de niño", 84000, "calzado", "niños","assets/adidassuperstarniño.webp");
agregarProducto("Zapatillas Puma Suede Classic XXI de niños", 60000, "calzado", "niños","assets/suedeniños.webp");
agregarProducto("Zapatillas Nike Air Force 1 06", 55000, "calzado", "niños","assets/airforceniños.webp");
agregarProducto("Pantalon Jordan Essentials de niño", 58000, "indumentaria", "niños","assets/pantalonjordanniños.webp");
agregarProducto("Remera Adidas Originals Trefoil de niños", 45000, "indumentaria", "niños","assets/remeraadidasniños.webp");
agregarProducto("Remera Nike Crop de niño", 35000, "indumentaria", "niños","assets/remeranikeniños.webp");






////////////DIVISION DE LOS PRODUCTOS/////////////



let calzado = todosLosProductos.filter((el) => el.prenda == "calzado");
let indumentaria = todosLosProductos.filter((el) => el.prenda == "indumentaria");
let hombre = todosLosProductos.filter((el) => el.genero == "hombre");
let mujer = todosLosProductos.filter((el) => el.genero == "mmujer");
let niños = todosLosProductos.filter((el) => el.genero == "niños");




function renderizarProductos(productos, id) {
    const contenedorProductos = document.getElementById(id);
    contenedorProductos.innerHTML = ''; // Limpiamos el contenedor antes de renderizar

    productos.forEach(producto => {
        let productoDiv = document.createElement('div');
        productoDiv.className = 'card';

        productoDiv.innerHTML = `
            <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <input type="button" value="Agregar al carrito">
            </div>
        `;

        contenedorProductos.appendChild(productoDiv);
    });
}





function ElementOutstanding(array, numElements) {
    // Barajar el array
    let random = array.sort(() => 0.5 - Math.random());
    
    // Seleccionar los primeros 'numElements' elementos
    return random.slice(0, numElements);
}

let randomElements = ElementOutstanding(todosLosProductos, 4);

renderizarProductos(randomElements, 'productos');








