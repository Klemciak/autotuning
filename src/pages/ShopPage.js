import React from "react"
import "../styles/ShopPage.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import storeItems from "../components/shopItems.json"
import { StoreItem } from "../components/StoreItem.tsx"
const ShopPage = () => {
  return (
    <div className="shopWrap">
      <div className="cartBackground">
        <button className="cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="cart_number">5</div>
        </button>
      </div>
      <h1 className="shop_title">Sklep</h1>
      <div className="items">
        {storeItems.map((item) => (
          <div className="item" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
      <p className="check">heh</p>
    </div>
  )
}

export default ShopPage
