import React, { useState } from "react"
import "../styles/ShopPage.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import storeItems from "../components/Shop/shopItems.json"
import { StoreItem } from "../components/Shop/StoreItem.tsx"
import { useShoppingCart } from "../components/Shop/ShoppingCartContext.tsx"
import { ShoppingCart } from "../components/Shop/ShoppingCart.tsx"

const itemsPerPage = 4

const ShopPage = () => {
  const { openCart, cartQuantity } = useShoppingCart()
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = storeItems.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(storeItems.length / itemsPerPage)

  const handleClick = (type) => {
    if (type === "prev" && currentPage > 1) {
      setCurrentPage((numberPage) => numberPage - 1)
    } else if (type === "next" && currentPage < totalPages) {
      setCurrentPage((numberPage) => numberPage + 1)
    } else if (typeof type === "number") {
      setCurrentPage(type)
    }
  }

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
        {currentItems.map((item) => (
          <div className="item" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
      <div className="shopWrapCart_paggination">
        <button
          onClick={() => handleClick("prev")}
          disabled={currentPage === 1}
          className="shopWrapCart_paggination_prevBtn"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (i, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className={`shopWrapCart_paggination_page ${currentPage === index + 1 ? "activePage" : ""}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handleClick("next")}
          disabled={currentPage === totalPages}
          className="shopWrapCart_paggination_nextBtn"
        >
          Next
        </button>
      </div>
      <ShoppingCart />
      <p className="check">heh</p>
    </div>
  )
}

export default ShopPage
