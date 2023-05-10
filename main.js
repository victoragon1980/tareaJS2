/// Al crear un carrito, empieza vacío
constructor() ;{
    this.precioTotal = 0;
    this.productos = [];
    this.categorias = [];
}

///función que agrega @{cantidad} de productos con @{sku} al carrito

async.ProductoEnCarrito(sku, cantidad) ;{
    console.log(`Agregando ${cantidad} ${sku}`);

    /// Busco el producto en la "base de datos"
    const producto = await findProductBySku(sku);

    if (!producto) {
        console.log(`Error: no existe el producto con SKU ${sku}`);
        return;
    }

    console.log("Producto encontrado", producto);

    /// Verifico si el producto ya está en el carrito
    const productoExistente = this.productos.find(p => p.sku === sku);

    if (productoExistente) {
        /// Actualizo la cantidad
        productoExistente.cantidad += cantidad;
    } else {
        /// Creo un producto nuevo
        const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
        this.productos.push(nuevoProducto);
        this.categorias.push(producto.categoria);
    }

    this.precioTotal += producto.precio * cantidad;

    /// Actualizo la lista de categorías solamente si la categoría no estaba en la lista
    if (!this.categorias.includes(producto.categoria)) {
        this.categorias.push(producto.categoria);
    }
}

///función que elimina @{cantidad} de productos con @{sku} del carrito
 
eliminarProducto(sku, cantidad) ;{
    return new Promise
}
