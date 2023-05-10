class Producto {
  constructor(sku, nombre, precio, categoria, stock = 10) {
    this.sku = sku;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }
}
    
const productosDelSuper = [
  queso,
  gaseosa,
  cerveza,
  arroz,
  fideos,
  lavandina,
  shampoo,
  jabon,
];




// Clase que representa el carrito de compras
class  Carrito {
  productos = []; // Lista de productos en el carrito
  categorias = []; // Lista de categorías de los productos en el carrito
  precioTotal = [];} // Precio total de todos los productos en el carrito

// Al crear un carrito, empieza vacío
class Carrito {
  constructor() {
    this.precioTotal = 0;
    this.productos = [];
    this.categorias = [];
  }
  
  agregarProducto(producto) {
    this.productos.push(producto);
    this.precioTotal += producto.precio;
  }
  
    eliminarProducto(producto) {
    const index = this.productos.indexOf(producto);
    if (index !== -1) {
      this.productos.splice(index, 1);
      this.precioTotal -= producto.precio;
    }
  }
  
  calcularPrecioTotal() {
    return this.precioTotal;
  }
}


// Creo la instancia de la clase Carrito después de su definición
const Carrito = new Carrito();

const queso = new Producto("KS944RUR", "Queso", 10, "lacteos", 4);
const gaseosa = new Producto("FN312PPE", "Gaseosa", 5, "bebidas");
const cerveza = new Producto("PV332MJ", "Cerveza", 20, "bebidas");
const arroz = new Producto("XX92LKI", "Arroz", 7, "alimentos", 20);
const fideos = new Producto("UI999TY", "Fideos", 5, "alimentos");
const lavandina = new Producto("RT324GD

const Carrito = new Carrito();
Carrito.agregarProducto("KS944RUR", 3);
Carrito.agregarProducto("FN312PPE", 2);
Carrito.agregarProducto("PV332MJ", 5);
Carrito.agregarProducto("XX92LKI", 2).then(() => {
  return Carrito.eliminarProducto("XX92LKI", 1);
});
Carrito.agregarProducto("RT324GD", 4);
Carrito.agregarProducto("asfgdasfgd", 2);

///función que agrega @{cantidad} de productos con @{sku} al carrito

async function agregarProducto(sku, cantidad) {
try {
console.log(Agregando ${cantidad} ${sku});

// Busco el producto en la "base de datos"
const producto = await findProductBySku(sku);

if (!producto) {
console.log(`Error: no existe el producto con SKU ${sku}`);
return;
}

  console.log("Producto encontrado", producto);

    // Verifico si el producto ya está en el carrito
    const productoExistente = this.productos.find((p) => p.sku === sku);

    if (productoExistente) {
      // Actualizo la cantidad
      productoExistente.cantidad += cantidad;
    } else {	
// Creo un producto nuevo si no existe
const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
      this.productos.push(nuevoProducto);
      this.categorias.push(producto.categoria);
    }

this.precioTotal += producto.precio * cantidad;

// Actualizo la lista de categorías si no estaba en la lista
    if (!this.categorias.includes(producto.categoria)) {
      this.categorias.push(producto.categoria);
    }
      } catch (error) {
    console.error(error);
  }


//función que elimina @{cantidad} de productos con @{sku} del carrito
async function eliminarProducto(sku, cantidad) {
  return new Promise(async (resolve, reject) => {
    try {
      // Busco el producto en el carrito
      const productoExistenteIndex = this.productos.findIndex((p) => p.sku === sku);

      if (productoExistenteIndex === -1) {
        throw new Error(`El producto con SKU ${sku} no existe en el carrito`);
      }

      const productoExistente = this.productos[productoExistenteIndex];

      // Verifico si la cantidad a eliminar es mayor a la cantidad en el carrito
      if (cantidad > productoExistente.cantidad) {
        throw new Error(`La cantidad a eliminar es mayor a la cantidad en el carrito para el producto con SKU ${sku}`);
      }

      // Actualizo la cantidad o elimino el producto del carrito si la cantidad llega a cero
      productoExistente.cantidad -= cantidad;

      if (productoExistente.cantidad === 0) {
        this.productos.splice(productoExistenteIndex, 1);
      }

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

class ProductoEnCarrito {
  constructor(sku, nombre, cantidad) {
    if (typeof sku !== 'string' || !sku) {
      throw new Error('El SKU debe ser una cadena de caracteres no vacía');
    }

    if (typeof nombre !== 'string' || !nombre) {
      throw new Error('El nombre debe ser una cadena de caracteres no vacía');
    }

    if (typeof cantidad !== 'number' || cantidad < 1) {
      throw new Error('La cantidad debe ser un número entero positivo');
    }

    this.sku = sku;
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}


// Función que busca un producto por su sku en "la base de datos"
function findProductBySku(sku) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundProduct = productosDelSuper.find(
        (product) => product.sku === sku
      );
      if (foundProduct) {
        console.log(`Producto con SKU ${sku} encontrado`);
        resolve(foundProduct);
      } else {
        reject(`Error: no se encontró el producto con SKU ${sku}`);
      }
    }, 1500);
  });
}

//función eliminarProducto() con then() y catch()

Carrito.eliminarProducto("XX92LKI", 1)
  .then(() => {
    console.log("Producto eliminado exitosamente");
  })
  .catch((error) => {
    console.error(error);
  });
