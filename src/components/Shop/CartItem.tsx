import React from "react"
import { useShoppingCart } from "./ShoppingCartContext.tsx"
import storeItems from "./shopItems.json"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((i) => i.id === id)
  if (item == null) return null

  return (
    <div className="cartPopup_body_item">
      <img src={item.imgUrl} className="cartPopup_body_item_img" />
      <div className="cartPopup_body_item_text">
        <div className="cartPopup_body_item_text_name">
          {item.name} {quantity > 1 && <span className="text_name_quantity">x{quantity}</span>}
        </div>
        <span className="cartPopup_body_item_text_priceOne">{item.price} zł</span>
      </div>
      <span className="cartPopup_body_item_text_priceStack">Razem: {(item.price * quantity).toFixed(2)} zł</span>
      <button className="cartPopup_body_item_btn" onClick={() => removeFromCart(item.id)}>
        Usuń z koszyka
      </button>
    </div>
  )
}
