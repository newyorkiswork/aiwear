"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  id: number
  name: string
  image: string
  price: number
  category: string
  slug: string
  size: string
  color: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, 'id'>) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (newItem: Omit<CartItem, 'id'>) => {
    console.log('CartContext: Adding item to cart:', newItem)
    
    setItems(prevItems => {
      // Check if item already exists with same size and color
      const existingItemIndex = prevItems.findIndex(
        item => 
          item.slug === newItem.slug && 
          item.size === newItem.size && 
          item.color === newItem.color
      )

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += newItem.quantity
        console.log('CartContext: Updated existing item quantity:', updatedItems[existingItemIndex])
        return updatedItems
      } else {
        // Add new item with unique ID
        const newCartItem: CartItem = {
          ...newItem,
          id: Date.now() // Simple unique ID generation
        }
        console.log('CartContext: Added new item:', newCartItem)
        return [...prevItems, newCartItem]
      }
    })
  }

  const removeFromCart = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
