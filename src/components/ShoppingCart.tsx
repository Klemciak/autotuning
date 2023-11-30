import React from "react"
import { useShoppingCart } from "./ShoppingCartContext.tsx"
import { CartItem } from "./CartItem.tsx"
import storeItems from "./shopItems.json"
export function ShoppingCart() {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <div className="cartPopupWrap">
      <div className="cartPopup">
        <div className="cartPopup_body">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="cartPopup_body_totalPrice">
            Total{" "}
            {cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0)}
          </div>
        </div>
      </div>
    </div>
  )
}
