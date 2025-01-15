
// //Modificador STATIC, se utiliza para acceder directamente a traves de la clase 

// //Los metodos o propiedades estaticas (static) no requieren que se creen una 
// // instancia de la clase para ser utilizados

// class Calculadora {
//     //metodo static
//     static sumar(a, b){
//         return a + b;
//     }
// }

// //El acceso al metodo estatico directamente de la clase es asi:
// console.log(Calculadora.sumar(6,4));

// //no se puede acceder desde una instancia 
// const clac = new Calculadora();
// console.log(clac.sumar(6,4));

// //El modificador static en JS, es una herramiento clave para definir funciones y propiedades 
// // compartidas sin necesidad de crear algun tipo de instancia de una clase.


// //Modificador STATIC, se utiliza para acceder directamente a traves de la clase 

// //Los metodos o propiedades estaticas (static) no requieren que se creen una 
// // instancia de la clase para ser utilizados

// class Calculadora {
//     //metodo static
//     static sumar(a, b){
//         return a + b;
//     }
// }

// //El acceso al metodo estatico directamente de la clase es asi:
// console.log(Calculadora.sumar(6,4));

// //no se puede acceder desde una instancia 
// const clac = new Calculadora();
// console.log(clac.sumar(6,4));

// //El modificador static en JS, es una herramiento clave para definir funciones y propiedades 
// // compartidas sin necesidad de crear algun tipo de instancia de una clase.



//Sistema de Ventas
//Creacion de la clase Producto
class Producto {
    static contadorProductos = 0;

    constructor(nombre, categoria, precio, stock){
        this._idProducto = ++Producto.contadorProductos; //++: Preincremento
        this._nombre = nombre;
        this._categoria = categoria;
        if (precio < 0) {
            console.log('El precio no puede ser negativo.');
            return;
        } else {
            this._precio = precio;
        }
        this._stock = stock;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        if(precio < 0) {
            console.log('El precio no puede ser cero.');
            return;
        }
        this._precio = precio;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock;
    }

    disminuirStock(cantidad) {
        if (this._stock >= cantidad) {
            this._stock -= cantidad;
        } else {
            console.log(`No hay suficiente stock para ${this._nombre}`);
        }
    }

    toString() {
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Categoria: ${this._categoria} , Precio: ${this._precio}, Stock Disponible: ${this._stock}`;
    }
}

//Creacion de la clase Orden
class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() { //Se define asi por que es constante, y se puede usar en cualquier momento
        return 5;
    }

    constructor () {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto, cantidad) {
        if (cantidad <= 0) {
            console.log('La cantidad debe ser mayor a 0.');
            return;
        }

        //Verificar si no hemos superado el maximo de productos existentes
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            if (producto.stock >= cantidad) {
                producto.disminuirStock(cantidad);
                this._productos.push({ producto, cantidad });
            } else {
                console.log(`No hay suficiente stock de ${producto.nombre} para agregar a la orden.`);
            }
            //Otro metodo
            //this._productos[this._contadorProductosAgregados++] = producto;
        } else {
            //Indica que no se puede agregar mas productos a la orden
            console.log('No se pueden agregar mas productos a la orden');
        }
    }

    aplicarDescuento(totalVenta){
        let descuento = 0;
        for (const producto of this._productos) {
            if (producto._categoria === 'Electronica') {
                descuento += producto._precio * 0,1; //10% de descuento a la categoria Electronica
            }
        }
        return totalVenta - descuento;
    }

    calcularImpuestos(totalVenta) {
        const impuesto = totalVenta * 0.15; //IVA del 15%
        return totalVenta + impuesto;
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const {producto, cantidad} of this._productos) {
            totalVenta += producto._precio * cantidad; //totalVenta = totalVenta + producto.precio;
            
        }
        totalVenta = this.aplicarDescuento(totalVenta);
        totalVenta = this.calcularImpuestos(totalVenta);
        return totalVenta;
    }

    mostrarOrden() {
        let productosOrden = '';
        for (const {producto, cantidad} of this._productos) {
            //productosOrden += producto.toString() + ' ';
            productosOrden += '\n{' + producto.toString() + '}'; //Tenemos varios Productos
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto('Laptop', 'Portatil' , 500, 5);
let producto2 = new Producto('Mouse', 'Periferico' , 10, 5);
let producto3 = new Producto('CPU Ryzen 5', 'Escritorio', 1000, 3);

let orden1 = new Orden();
orden1.agregarProducto(producto1, 2);
orden1.agregarProducto(producto2, 3);
orden1.agregarProducto(producto3, 3);

orden1.mostrarOrden();

let orden2 = new Orden(); //creamos el segundo objeto de tipo orden
let producto4 = new Producto('Teclado', 'Periferico', -1, 8);
let producto5 = new Producto('Cable de Red RJ-45', 'Electronica', 7, 7); // 7*0.10=6.30

orden2.agregarProducto(producto1, 1);
orden2.agregarProducto(producto3, 1);
orden2.agregarProducto(producto4, 8);
orden2.agregarProducto(producto5, 3);
orden2.mostrarOrden();


let orden3 = new Orden();
orden3.agregarProducto(producto2, 1);
orden3.agregarProducto(producto3, 1);
orden3.agregarProducto(producto4, 1);
orden3.mostrarOrden();


//Ejercicio RETO

/*
1.- Stock Disminuya
2.- Descuento por Categoria
    Crear una nueva propiedad categoria en la clase Producto
    //los productos de la categoria 'Electronia', deben tener un descuento del 10% al calcular el totalVenta. 
3.- Aplicacion de impuestos:
    Implementar un metodo calcularImpuestos en la clase Orden para que agrege un impuesto %15 al calculo total
4.- Listar los productos de forma Descendente
5.- Restriccion adicional:
    Asegurar que los precios no sean negativos al establecerlo en la clase Producto
*/

