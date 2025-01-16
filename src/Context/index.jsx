import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  // Convert Local state in global state
  // Shopping Cart - Increment Quantity
  const [count, setCount] = useState(0)
  // console.log("COUNT: ", count)

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Order Card - Open/Close
  const [isOrderCardOpen, setIsOrderCardOpen] = useState(true)
  const openOrderCard = () => setIsOrderCardOpen(true)
  const closeOrderCard = () => setIsOrderCardOpen(false)

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart - Add Products to Cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart - Order
  const [order, setOrder] = useState([])

  // Get products 
  const [items, setItems] = useState(null)

  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by Title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by Category
  const [searchByCategory, setSearchByCategory] = useState(null)


  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByCategory(items, searchByTitle)
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory)

    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))

    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  // console.log("filteredItems: ", filteredItems)



  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      setIsCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      isOrderCardOpen,
      setIsOrderCardOpen,
      openOrderCard,
      closeOrderCard,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
