// Clase Producto
class Producto {
    #nombre;
    #precio;
    #cantidad;
    #categoria;
    #vendido;

    constructor(nombre, precio, cantidad, categoria) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
        this.#categoria = categoria;
        this.#vendido = 0;
    }

    // Getters y Setters para encapsulación
    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return this.#precio;
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) this.#precio = nuevoPrecio;
    }

    get cantidad() {
        return this.#cantidad;
    }

    set cantidad(nuevaCantidad) {
        if (nuevaCantidad >= 0) this.#cantidad = nuevaCantidad;
    }

    get categoria() {
        return this.#categoria;
    }

    incrementarVenta(cantidad) {
        this.#vendido += cantidad;
    }

    get vendido() {
        return this.#vendido;
    }
}

// Clase ProductoDestacado que hereda de Producto
class ProductoDestacado extends Producto {
    #descuentoEspecial;

    constructor(nombre, precio, cantidad, categoria, descuentoEspecial) {
        super(nombre, precio, cantidad, categoria);
        this.#descuentoEspecial = descuentoEspecial;
    }
}

class Inventario {
    #productos;

    constructor() {
        this.#productos = [];
    }

    // Método para agregar productos
    agregarProducto(nombre, precio, cantidad, categoria, destacado = false, descuento = 0) {
        let producto;
        if (destacado) {
            producto = new ProductoDestacado(nombre, precio, cantidad, categoria, descuento);
        } else {
            producto = new Producto(nombre, precio, cantidad, categoria);
        }
        this.#productos.push(producto);
        console.log(`Se ha agregado satisfactoriamente: ${cantidad} - ${nombre} $${precio}`);
    }

    // Método para listar productos ordenados por precio
    listarProductos(orden = 'ascendente') {
        let productosOrdenados = [];
        for (let i = 0; i < this.#productos.length; i++) {
            productosOrdenados[i] = this.#productos[i];
        }

        for (let i = 0; i < productosOrdenados.length - 1; i++) {
            for (let j = i + 1; j < productosOrdenados.length; j++) {
                if (
                    (orden === 'ascendente' && productosOrdenados[i].precio > productosOrdenados[j].precio) ||
                    (orden === 'descendente' && productosOrdenados[i].precio < productosOrdenados[j].precio)
                ) {
                    let temp = productosOrdenados[i];
                    productosOrdenados[i] = productosOrdenados[j];
                    productosOrdenados[j] = temp;
                }
            }
        }

        console.log(`Listado de productos (${orden}):`);
        for (let i = 0; i < productosOrdenados.length; i++) {
            console.log(`${productosOrdenados[i].nombre} - $${productosOrdenados[i].precio} - Cantidad: ${productosOrdenados[i].cantidad}`);
        }
    }

    // Método para filtrar productos por categoría
    filtrarCategoria(categoria) {
        const filtrados = this.#productos.filter(producto => producto.categoria === categoria);
        console.log(`Productos en la categoría "${categoria}":`);
        filtrados.forEach(producto => {
            console.log(`${producto.nombre} - $${producto.precio} - Cantidad: ${producto.cantidad}`);
        });
    }

    // Método para aplicar descuento por categoría
    aplicarDescuento(categoria, porcentaje) {
        this.#productos.forEach(producto => {
            if (producto.categoria === categoria) {
                let descuento = (producto.precio * porcentaje) / 100;
                producto.precio -= descuento;
                if (producto.precio < 0) producto.precio = 0;
            }
        });
        console.log(`Descuento del ${porcentaje}% aplicado a la categoría "${categoria}".`);
    }

    get productos() {
        return this.#productos;
    }
}

// Clase Ventas
class Ventas {
    #inventario;
    #ventas;

    constructor(inventario) {
        this.#inventario = inventario;
        this.#ventas = [];
    }

    // Método para realizar venta
    realizarVenta(nombreProducto, cantidad) {
        const producto = this.#inventario.productos.find(p => p.nombre === nombreProducto);

        if (producto) {
            if (producto.cantidad >= cantidad) {
                producto.cantidad -= cantidad;
                producto.incrementarVenta(cantidad);
                const venta = {
                    nombreProducto: nombreProducto,
                    cantidad: cantidad,
                    total: producto.precio * cantidad
                };
                this.#ventas.push(venta);
                console.log(`Venta realizada: ${cantidad} unidad(es) de "${nombreProducto}".`);
            } else {
                console.error(`Error: Stock insuficiente para "${nombreProducto}".`);
            }
        } else {
            console.error(`Error: Producto "${nombreProducto}" no encontrado.`);
        }
    }

    // Método para generar reporte de ventas
    generarReporte() {
        console.log("\n----- Reporte de Inventario Actualizado -----");
        this.#inventario.productos.forEach(producto => {
            console.log(`${producto.nombre} - Cantidad: ${producto.cantidad}`);
        });

        console.log("\n----- Reporte de Ventas -----");
        let totalIngresos = 0;
        this.#ventas.forEach(venta => {
            console.log(`${venta.nombreProducto} - ${venta.cantidad} unidad(es) - Total: $${venta.total}`);
            totalIngresos += venta.total;
        });

        console.log(`\nTotal de ingresos: $${totalIngresos}`);
    }
}


//Ingreso de 6 Productos
const producto = new Inventario();
producto.agregarProducto('Galleta Amor', '1.00', '5', 'Galletas');
producto.agregarProducto('Chicle Trident', '0.50', '20', 'Chicle');
producto.agregarProducto('Chocolate Tango', '0.50', '5', 'Galletas');
producto.agregarProducto('Chupete Boobalo', '0.20', '5', 'Chupete');
producto.agregarProducto('Chicle Acido', '0.10', '5', 'Chicles');
producto.agregarProducto('Galletas Ritz', '0.50', '7', 'Galletas');

console.log("---------------------------------------");
const orden = new Inventario();
producto.listarProductos('ascendente'); //listar los productos de manera ascendente 
console.log("---------------------------------------");
producto.filtrarCategoria('Galletas'); //filtro todos los productos que pertenecen a la categoria 'Galletas'
producto.filtrarCategoria('Chicle');
producto.aplicarDescuento('Chicle', '10'); //aplicamos un descuento del 10% a la categoria chicle
console.log("------------- VENTAS----------------------");
const ventas = new Ventas(producto);
ventas.realizarVenta('Galleta Amor', 2);
ventas.realizarVenta('Chicle Trident', 3);
ventas.realizarVenta('Chupete Boobalo', 8);
console.log("------------- REPORTE----------------------");
ventas.generarReporte();