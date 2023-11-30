import React from "react"
import "../styles/ShopPage.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import storeItems from "../components/Shop/shopItems.json"
import { StoreItem } from "../components/Shop/StoreItem.tsx"
import { useShoppingCart } from "../components/Shop/ShoppingCartContext.tsx"
import { ShoppingCart } from "../components/Shop/ShoppingCart.tsx"
const ShopPage = () => {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <div className="shopWrapCart">
      {cartQuantity > 0 && (
        <div className="cartBtn">
          <button className="cart" onClick={openCart}>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="cart_number">{cartQuantity}</div>
          </button>
        </div>
      )}

      <h1 className="shop_title">Sklep</h1>
      <div className="items">
        {storeItems.map((item) => (
          <div className="item" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
      <ShoppingCart />
      <p className="check">heh</p>
    </div>
  )
}

export default ShopPage
