

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
    todosLosProductos.push(nuevoProducto);
}



agregarProducto("Zapatillas Adi2000 de hombre", 160000, "calzado", "hombre", 'assets/adi2000.webp');
agregarProducto("Zapatillas Jordan Air 4 Retro de hombre", 320000, "calzado", "hombre","assets/jordanretro4.webp");
agregarProducto("Zapatillas Puma Suede XL de Hombre", 170000, "calzado", "hombre","assets/suedexl.webp");
agregarProducto("Zapatiilas Nike Air Max 1 de Hombre", 25600, "calzado", "hombre", "./assets/airmax-hombre.webp")
agregarProducto("Pantalon Adidas Originals Essentials de hombre", 75000, "indumentaria", "hombre","assets/Pantalon-Adidas-Originals.webp");
agregarProducto("Remera Jordan Air de hombre", 60000, "indumentaria", "hombre","assets/remerajordan.webp");
agregarProducto("Campera Nike Tech Fleece de hombre", 190000, "indumentaria", "hombre","assets/camperatech.webp");
agregarProducto('Gorra NBA Chicago Bulls Hombre', 35500, 'accesorio', 'hombre', "./assets/gorra-hombre.webp");
agregarProducto("Zapatillas Jordan Air 1 de mujer", 220000, "calzado", "mujer","assets/jordan1mujer.webp");
agregarProducto("Zapatillas Nike AF1 Shadow de mujer", 260000, "calzado", "mujer","assets/af1shadow.webp");
agregarProducto("Zapatillas Adidas Originals Campus 00s de mujer", 170000, "calzado", "mujer","assets/campus00mujer.webp");
agregarProducto("Zapatiilas Nike Lebron XXI de Mujer", 370000, "calzado", "mujer", "./assets/nike-lebron-mujer.webp");
agregarProducto("Chaleco Nike Classic de mujer", 140000, "indumentaria", "mujer","assets/chaleconikemujer.webp");
agregarProducto("Short Jordan Classic de mujer", 85000, "indumentaria", "mujer","assets/shortjordan.webp");
agregarProducto("Buzo Champion de mujer", 52000, "indumentaria", "mujer", "assets/buzochampionmujer.webp");
agregarProducto("Bolso Adidas Shpper", 95000, "accesorio", "mujer", "assets/bolso-mujer.webp");
agregarProducto("Zapatillas Adidas Superstar de niño", 84000, "calzado", "niños","assets/adidassuperstarniño.webp");
agregarProducto("Zapatillas Puma Suede Classic XXI de niños", 60000, "calzado", "niños","assets/suedeniños.webp");
agregarProducto("Zapatillas Adidas Originals Superstar", 85000, "calzado", "niños","assets/adidas-niño.webp");
agregarProducto("Zapatillas Nike Air Force 1 06", 55000, "calzado", "niños","assets/airforceniños.webp");
agregarProducto("Pantalon Jordan Essentials de niño", 58000, "indumentaria", "niños","assets/pantalonjordanniños.webp");
agregarProducto("Remera Adidas Originals Trefoil de niños", 45000, "indumentaria", "niños","assets/remeraadidasniños.webp");
agregarProducto("Remera Nike Crop de niño", 35000, "indumentaria", "niños","assets/remeranikeniños.webp");
agregarProducto("Mochila Nike Elemental de niño", 70000, "indumentaria", "niños","assets/mochila-niño.webp");






////////////DIVISION DE LOS PRODUCTOS/////////////


function elementosRandom(array, numElementos) {
    let random = array.sort(() => 0.5 - Math.random());
    return random.slice(0, numElementos);
}
let recomendado = elementosRandom(todosLosProductos, 4);


let hombre = todosLosProductos.filter((el) => el.genero == "hombre");
let mujer = todosLosProductos.filter((el) => el.genero == "mujer");
let niños = todosLosProductos.filter((el) => el.genero == "niños");

//////////////////////////CREACION DE LA CARD////////////////





function crearProducto(productos, id) {
    const contenedorProductos = document.querySelector(id);
    contenedorProductos.innerHTML = ''; 
    let contador = 0;
    productos.forEach(producto => {
        let productoDiv = document.createElement('div');
        productoDiv.className = 'card';
        contador++;
        productoDiv.id = `producto-${contador}`;
        productoDiv.innerHTML = `
            <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <input type="button" value="AGREGAR" id="agregar-${contador}">
            </div>
        `;
        contenedorProductos.appendChild(productoDiv);



        ///////////AGREGAR AL CARRITO//////////////////


        const botonAgregar = document.getElementById(`agregar-${contador}`);
        botonAgregar.addEventListener('click', () => {
            const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
            const item = {
                idUnico:`${producto.id}-${Date.now()}`,
                ...producto
            };
            carrito.push(item);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito(); 
        });
    });
}


///////CARRITO VISIBLE Y OCULTO////////////


let carritoImg = document.querySelector('#carrito-img');
let carritoSeccion = document.querySelector('#oculto');

carritoImg.addEventListener('click', () => {
    if (carritoSeccion.classList.contains('oculto')) {
        carritoSeccion.classList.remove('oculto');
        carritoSeccion.classList.add('visible');
    } else if (carritoSeccion.classList.contains('visible')) {
        carritoSeccion.classList.remove('visible');
        carritoSeccion.classList.add('oculto');
    }
});


/////////////MOSTRAR LOS PRODUCTOS DEL CARRITO//////////////////

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const carritoItems = document.getElementById('carrito-items');
    const precioCarrito = document.querySelector('#total')
    const precioDolar = document.querySelector('#precio-dolar')
    let total =0;

    carritoItems.innerHTML = ''; 

    carrito.forEach(producto => {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'carrito-item';
        itemDiv.id = `carrito-${producto.idUnico}`;
        itemDiv.innerHTML = `
            <div>
                <img src="${producto.img}" alt="${producto.nombre}">
                <h5>${producto.nombre}</h5>
                <p>$${producto.precio}</p>
                <img src="assets/eliminar.png" alt="" class="eliminar" id="eliminar-${producto.idUnico}">
            </div>
        `;
        carritoItems.appendChild(itemDiv);

        ////SUMAR EL PRECIO/////

        total += producto.precio
        
        /////////////////ELIMINAR ELEMENTO DEL CARRITO

        const eliminar = document.getElementById(`eliminar-${producto.idUnico}`);
        eliminar.addEventListener('click', () => {
            document.getElementById(`carrito-${producto.idUnico}`).remove();
            eliminarProductoDelCarrito(producto.idUnico);
        });
    });
    
    /////////ACTUALIZAR EL PRECIO DEL CARRITO/////
    precioCarrito.textContent= `$${total}`
    if (carrito.length === 0){
        precioDolar.textContent = `0 USD`
    }else {
        fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => {
        const dolarVenta = data.venta;
        let totalDolares = Math.round(total/dolarVenta)
        
        precioDolar.textContent = `${totalDolares} USD`
    })
    .catch(() => {
        precioDolar.textContent = '';
    });
    } 
    
    ///////////CONTADOR DEL CARRITO////////////

    const contadorCarrito = document.querySelector('#contadorCarrito')
        contadorCarrito.textContent= carrito.length
}

////FUNCION PARA ELMINAR PRODUCTO DEL CARRITO/////////////

function eliminarProductoDelCarrito(idUnico) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    carrito = carrito.filter(producto => producto.idUnico !== idUnico);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}


///////////FINALIZAR COMPRA/////////////

const fin_compra = document.querySelector('#fin-compra');

fin_compra.addEventListener('click', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length > 0) {
        Swal.fire({
            title: 'Compra finalizada!',
            text: 'Gracias por elegirnos.',
            icon: 'success',
            confirmButtonText: 'OK',
            width: 400,
            customClass: {   
                confirmButton: 'confirmado'
            }
        }).then(() => {
            localStorage.removeItem('carrito');
            mostrarCarrito();
        });
    } else {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'No has añadido ningun producto.',
            icon: 'error',
            confirmButtonText: 'OK',
            width: 400,
            customClass: {   
                confirmButton: 'confirmado'
            }
        });
    }
});

/////MUESTRO LOS PRODUCTOS EN EL MAIN///////////

crearProducto(niños, '#productos-niños');


///////MUESTRA EL CARRITO CADA VEZ QUE CARGA LA PAGINA//////////

document.addEventListener('DOMContentLoaded', mostrarCarrito);