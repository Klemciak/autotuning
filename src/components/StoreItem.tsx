import React from "react"
type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 0
  return (
    <div className="card">
      <img className="card_img" src={imgUrl} alt="obrazek tego przedmiotu" />
      <div className="card_body">
        <div className="card_title">
          <span className="card_title_name">{name}</span>
          <span className="card_title_price">{price} zł</span>
        </div>
        <div className="add">
          {quantity === 0 ? (
            <button className="add_button"> + Dodaj do koszyka</button>
          ) : (
            <div className="add_buttons">
              <div className="plusAndMinus">
                <button className="plusAndMinus_btn">-</button>
                <span className="plisAndMinus_quantity">{quantity}</span> w koszyku
                <button className="plusAndMinus_btn">+</button>
              </div>
              <button className="buttons_remove">Remove</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
