import React, { useEffect, useRef } from "react"
import { useShoppingCart } from "./ShoppingCartContext.tsx"
import { CartItem } from "./CartItem.tsx"
import storeItems from "./shopItems.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

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
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className="cartPopup_title">Koszyk</div>
        <div className="cartPopup_body">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="cartPopup_body_totalPrice">
            Całkowity koszt:{" "}
            {cartItems
              .reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id)
                const itemPrice = item?.price || 0
                const itemTotal = itemPrice * cartItem.quantity
                return total + itemTotal
              }, 0)
              .toFixed(2)}{" "}
            zł
          </div>
        </div>
        <div className="cartPopup_buy">
          <button className="cartPopup_buy_btn">Kup</button>
        </div>
      </div>
    </div>
  )
}
