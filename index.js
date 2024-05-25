let nombre = prompt("Bienvenido al supermercado Fresh, por favor ingresar su nombre:");
let edad =  Number(prompt("Hola " + nombre + ", a continuacion deberas ingresar tu edad:"));
    let option;
    let total = 0;
    function sumadecompra(x){
        total = total + x;
    }
    function totaldecompra(producto){
        alert("Has añadido " + producto + "\n La compra por ahora es de $" + total);
    }
if (edad < 18){
    while(option != 0) {
        option = prompt("Estos son los productos disponibles, cual/es desea llevar: \n 1. Gaseosa Coca-Cola 2.25lt $2000  \n 2. Agua Saborizada Aquarius Pera 2.25lt $1400 \n 3. Gaseosa Sprite Lima-Limon 2.25lt $2600  \n 4. Bebida Energizante Monster Energy 473ml $1900 \n 5. Finalizar compra \n 0. salir");
        if(option == 1){
            sumadecompra(2000);
            totaldecompra("una Coca-Cola.");
        } else if(option == 2){
            sumadecompra(1400);
            totaldecompra("una Aquarius de Pera.");
        } else if(option == 3){
            sumadecompra(2600);
            totaldecompra("una Sprite.");
        } else if(option == 4){
            sumadecompra(1900);
            totaldecompra("una Monster.");
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
            sumadecompra(2000);
            totaldecompra("una Coca-Cola.");
        } else if(option == 2){
            sumadecompra(1400);
            totaldecompra("una Aquarius de Pera.");
        } else if(option == 3){
            sumadecompra(2600);
            totaldecompra("una Sprite.");
        } else if(option == 4){
            sumadecompra(1900);
            totaldecompra("una Monster.");
        } else if(option ==5){
            sumadecompra(9200); 
            totaldecompra("un Fernet.");
        } else if(option == 6){
            sumadecompra(5900);
            totaldecompra("un Smirnoff.");
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




