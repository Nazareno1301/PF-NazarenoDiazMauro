import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Inicializamos el estado del carrito obteniendo el valor almacenado en localStorage o un array vacío si no hay nada
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  const agregarAlCarrito = (item, cantidad) => {
    if (cantidad > 0) {
      const itemAgregado = { ...item, cantidad };

      const nuevoCarrito = [...carrito];
      const index = nuevoCarrito.findIndex((producto) => producto.id === itemAgregado.id);

      if (index !== -1) {
        nuevoCarrito[index].cantidad += cantidad;
      } else {
        nuevoCarrito.push(itemAgregado);
      }

      setCarrito(nuevoCarrito);
    }
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
