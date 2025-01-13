class Inventario {
    constructor() {
        this.productos = []; 
    }

    agregarProductos(nombre, precio, cantidad, categoria) {
        const producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            categoria: categoria
        };
        this.productos.push(producto);
        console.log(`Se ha agregado satisfactoriamente:`);
        console.log(`${cantidad} - ${nombre} $${precio}`);
    }

    listarProductos(orden) {
        for (let i = 0; i < this.productos.length - 1; i++) {
            for (let j = i + 1; j < this.productos.length; j++) {
                if (
                    (orden === 'ascendente' && this.productos[i].precio > this.productos[j].precio) ||
                    (orden === 'descendente' && this.productos[i].precio < this.productos[j].precio)
                ) {
                    const temp = this.productos[i];
                    this.productos[i] = this.productos[j];
                    this.productos[j] = temp;
                }
            }
        }

        console.log("Listado de productos:");
        for (let i = 0; i < this.productos.length; i++) {
            const producto = this.productos[i];
            console.log(`${producto.nombre} - $${producto.precio} - Cantidad: ${producto.cantidad}`);
        }
    
    }

    filtrarCategoria(categoria) {
        const productosFiltrados = [];
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].categoria === categoria) {
                productosFiltrados.push(this.productos[i]);
            }
        }

        console.log(`Productos en la categoría "${categoria}":`);
        for (let i = 0; i < productosFiltrados.length; i++) {
            const producto = productosFiltrados[i];
            console.log(`${producto.nombre} - $${producto.precio} - Cantidad: ${producto.cantidad}`);
        }
    }
}

class Ventas {
    constructor(inventario) {
        this.inventario = inventario; 
        this.ventas = []; 
    }

    realizarVenta(nombreProducto, cantidad) {
        let productoEncontrado = false;

        for (let i = 0; i < this.inventario.productos.length; i++) {
            const producto = this.inventario.productos[i];

            if (producto.nombre === nombreProducto) {
                productoEncontrado = true;

                if (producto.cantidad >= cantidad) {
                    producto.cantidad -= cantidad;
                    const venta = {
                        nombreProducto: nombreProducto,
                        cantidad: cantidad,
                        total: producto.precio * cantidad,
                    };
                    this.ventas.push(venta);
                    console.log(`Venta realizada: ${cantidad} unidades de "${nombreProducto}".`);
                } else {
                    console.log(`Error: Cantidad insuficiente de "${nombreProducto}".`);
                }
                break;
            }
        }

        if (!productoEncontrado) {
            console.log(`Error: Producto "${nombreProducto}" no encontrado.`);
        }
    }

    generarReporte() {
        console.log("Inventario actualizado:");
        for (let i = 0; i < this.inventario.productos.length; i++) {
            const producto = this.inventario.productos[i];
            console.log(`${producto.nombre} - Cantidad: ${producto.cantidad}`);
        }
    }
}


//Ingreso de 6 Productos
const producto = new Inventario();
producto.agregarProductos('Galleta Amor', '1.00', '5', 'Galletas');
producto.agregarProductos('Chicle Trident', '0.50', '20', 'Chicle');
producto.agregarProductos('Chocolate Tango', '0.50', '5', 'Galletas');
producto.agregarProductos('Chupete Boobalo', '0.20', '5', 'Chupete');
producto.agregarProductos('Chicle Acido', '0.10', '5', 'Chicles');
producto.agregarProductos('Galletas Ritz', '0.50', '7', 'Galletas');

console.log("---------------------------------------");
const orden = new Inventario();
producto.listarProductos('ascendente');
console.log("---------------------------------------");
producto.filtrarCategoria('Galletas');
producto.filtrarCategoria('Chicle');
console.log("------------- VENTAS----------------------");
const ventas = new Ventas(producto);
ventas.realizarVenta('Galleta Amor', 2);
ventas.realizarVenta('Chicle Trident', 3);
ventas.realizarVenta('Chupete Boobalo', 8);
console.log("------------- REPORTE----------------------");
ventas.generarReporte();