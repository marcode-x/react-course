import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4"

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink to='/'>All</NavLink>
        </li>
        <li>
          <NavLink to='/clothes'>Clothes</NavLink>
        </li>
        <li>
          <NavLink to='/electronics'>Electronics</NavLink>
        </li>
        <li>
          <NavLink to='/furnitures'>Furnitures</NavLink>
        </li>
        <li>
          <NavLink to='/toys'>Toys</NavLink>
        </li>
        <li>
          <NavLink to='/others'>Others</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          marco.parfums@andesdecants.cl
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'>
            Sign In
          </NavLink>
        </li>
        <li>
          🛒{context.count}
        </li>

      </ul>

    </nav>
  )
}

export default Navbar
