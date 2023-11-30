import React, { useEffect, useRef } from "react"
import { useShoppingCart } from "./ShoppingCartContext.tsx"
import { CartItem } from "./CartItem.tsx"
import storeItems from "./shopItems.json"

export function ShoppingCart() {
  const cartPopupRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handler = (e) => {
      if (cartPopupRef.current && !cartPopupRef.current.contains(e.target)) {
        closeCart()
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [])
  const { closeCart, cartItems, IsOpen } = useShoppingCart()
  return (
    <div className={`cartPopupWrap ${IsOpen ? "show" : ""}`} ref={cartPopupRef}>
      <div className="cartPopup">
        <button className="cartPopup_closeBtn" onClick={closeCart}>
          Zamknij popup
        </button>
        <div className="cartPopup_title">Koszyk</div>
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
