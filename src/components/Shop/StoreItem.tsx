import React from "react"
import { useShoppingCart } from "./ShoppingCartContext.tsx"
type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <>
      <img className="item_img" src={imgUrl} alt="obrazek tego przedmiotu" />
      <div className="item_body">
        <div className="item_title">
          <span className="item_title_name">{name}</span>
          <span className="item_title_price">{price} zł</span>
        </div>
        <div className="add">
          {quantity === 0 ? (
            <button className="add_button" onClick={() => increaseCartQuantity(id)}>
              {" "}
              + Dodaj do koszyka
            </button>
          ) : (
            <div className="add_buttons">
              <div className="plusAndMinus">
                <button className="plusAndMinus_btn" onClick={() => decreaseCartQuantity(id)}>
                  -
                </button>
                <span className="plusAndMinus_quantity">{quantity}</span> w koszyku
                <button className="plusAndMinus_btn" onClick={() => increaseCartQuantity(id)}>
                  +
                </button>
              </div>
              <button className="buttons_remove" onClick={() => removeFromCart(id)}>
                - Usuń z koszyka
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
