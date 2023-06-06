import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([])

  const addToCart = (product) => {
    const isRepeat = productsCart.some((p) => p.id === product.id)
    if (!isRepeat) {
      setProductsCart([...productsCart, { ...product, quantity: 1 }])
    } else {
      const updatedQuantity = productsCart.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 }
        }
        return p
      })
      setProductsCart(updatedQuantity)
    }
  }

  const removeProduct = (id) => {
    const updatedCart = productsCart.map((p) => {
      if (p.id === id && p.quantity > 1) {
        return { ...p, quantity: p.quantity - 1 }
      }
      return p
    })

    const updatedFilteredCart = updatedCart.filter((p) => p.quantity > 0)

    if (updatedFilteredCart.length > 0) {
      setProductsCart(updatedFilteredCart)
    } else {
      setProductsCart([])
    }
  }

  const clearCart = () => {
    setProductsCart([])
  }

  return (
    <CartContext.Provider
      value={{ addToCart, productsCart, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
