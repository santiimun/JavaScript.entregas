let nombre = prompt("Bienvenido al supermercado Fresh, por favor ingresar su nombre:");
let edad =  prompt("Hola " + nombre + ", a continuacion deberas ingresar tu edad:");
    let option;
    let total = 0;
if (edad < 18){
    while(option != 0) {
        option = prompt("Estos son los productos disponibles, cual/es desea llevar: \n 1. Gaseosa Coca-Cola 2.25lt $2000  \n 2. Agua Saborizada Aquarius Pera 2.25lt $1400 \n 3. Gaseosa Sprite Lima-Limon 2.25lt $2600  \n 4. Bebida Energizante Monster Energy 473ml $1900 \n 5. Finalizar compra \n 0. salir");
        if(option == 1){
            total= total + 2000;
            alert("Has añadido una Coca-cola.  \n La compra por ahora es de $" + total);
        } else if(option == 2){
            total= total + 1400;
            alert("Has añadido una Aquarius de Pera. \n La compra por ahora es de $" + total);
        } else if(option == 3){
            total= total + 2600;
            alert("Has añadido una Sprite.  \n La compra por ahora es de $" + total);
        } else if(option == 4){
            total= total + 1900;
            alert("Has añadido una Monster.  \n La compra por ahora es de $" + total);
        } else if(option == 5){
            if(total != 0){
            alert("Has finalizado la compra. El total a pagar es de $" + total + ". \n Muchas gracias por la compra, vuelva pronto.");
            break;
            } else if(total == 0){
                alert("No has añadido nada al carrito");
            }
        }else if(option == 0){
                if(total != 0){
                alert("Se cancelo tu compra ya que olvidaste de finalizarla.");
                
            }else if(total == 0){
            alert("Gracias por la visita");
            } 
        } 
    }
    } else if(edad > 17){
    
    while(option != 0){
        option = prompt("Estos son los productos disponibles, cual/es desea llevar: \n 1. Gaseosa Coca-Cola 2.25lt $2000  \n 2. Agua Saborizada Aquarius Pera 2.25lt $1400 \n 3. Gaseosa Sprite Lima-Limon 2.25lt $2600  \n 4. Bebida Energizante Monster Energy 473ml $1900 \n 5. Fernet Branca 750ml $9200 \n 6. Vodka Smirnoff Raspberry 700ml $5900 \n 7.Finalizar compra \n 0. salir");
        if(option == 1){
            total= total + 2000;
            alert("Has añadido una Coca-cola.  \n La compra por ahora es de $" + total);
        } else if(option == 2){
            total= total + 1400;
            alert("Has añadido una Aquarius de Pera. \n La compra por ahora es de $" + total);
        } else if(option == 3){
            total= total + 2600;
            alert("Has añadido una Sprite.  \n La compra por ahora es de $" + total);
        } else if(option == 4){
            total= total + 1900;
            alert("Has añadido una Monster.  \n La compra por ahora es de $" + total);
        } else if(option ==5){
            total= total + 9200; 
            alert("Has añadido un fernet. \n La compra por ahorass es de $" + total);
        } else if(option == 6){
            total= total + 5900;
            alert("Has añadido un Smirnoff. \n La compra por ahora es de $" + total);
        } else if(option == 7){
            if(total == 0){
                alert("No has añadido nada al carrito");
                continue;
            }
            alert("Has finalizado la compra. El total a pagar es de $" + total + ". \n Muchas gracias por la compra, vuelva pronto.");
            break;
        } else if(option == 0){
                if(total != 0){
                alert("Se cancelo tu compra ya que olvidaste de finalizarla.");
            }else if(total == 0){
            alert("Gracias por la visita");
            }
        }
    }
} 




