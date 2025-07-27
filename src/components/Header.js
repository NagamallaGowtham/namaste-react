import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
import { useSelector } from "react-redux"

const Header = () => {
  const store = useSelector((store) => store.cart.items)
  return (
    <div className="header flex items-center justify-between">
      <div className="logo-container">
        <img className="logo w-25" src={LOGO_URL} width="100" />
      </div>
      <div className="nav-items">
        <ul className="flex gap-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart - ({store.length} items)</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header