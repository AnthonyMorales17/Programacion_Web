let inventario = {
    producto1 : {
        nombre: 'Adidas Campus 00s',
        precio: 159.90,
        cantidad: 50,
    },

    producto2 : {
        nombre: 'Puma Suede xl',
        precio: 85.00,
        cantidad: 20,
    },

    producto3 : {
        nombre: 'Vans Knu Skool',
        precio: 93.83,
        cantidad: 100,
    },

    producto4 : {
        nombre: 'Adidas Bad Bunny',
        precio: 185.00,
        cantidad: 30,
    },
}

Object.seal(inventario);
inventario.nombre = 'Vans';
delete inventario.nombre;
console.log(inventario);

function venderProducto(nombreProducto, cantidadVenta) {
    for (let clave in inventario){
        if(inventario[clave].nombre == nombreProducto){
            if(inventario[clave].cantidad >= cantidadVenta){
                inventario[clave].cantidad -= cantidadVenta;
                console.log(`Acaba de Comprar: ${cantidadVenta} unidade(s) de ${nombreProducto}`);
            }else{
                console.log(`No se pudo realizar la compra de: ${nombreProducto}.`);
                console.error(`Error: Stock insuficiente para: ${nombreProducto}`);
            }
        }
    }
    console.log(`Producto "${nombreProducto}" No Encontrado.`)
}

function descuento(porcentaje){
    if(porcentaje < 0){
        console.error(`Error: El porcentaje ingresado no puede ser menor que cero.`);
    }

    for (let clave in inventario){
        let descuento = (inventario[clave].precio * porcentaje)/100;
        inventario[clave].precio -= descuento;
        if(inventario[clave].precio < 0){
            inventario[clave].precio = 0;
        }
    }
    
    console.log(`Descuento del ${porcentaje}% aplicado a todos los productos.`);
}

function mostrarInventario() {
    console.log("Inventario: ");
    for (let clave in inventario){
        console.log(inventario[clave]);
    }
}

mostrarInventario();

//Realizamos la compra de 5 Adidas Campus 00s
venderProducto('Adidas Campus 00s', 5);
//Validaciones de Inventario y Nombre del Producto.
venderProducto('Puma Suede xl', 21);
venderProducto('Adidas', 100);

//Aplicamos un descuento del 40%
descuento(40);
