import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCartStore from "./../Store/Cart.js";

function NavBar() {
  const store = useCartStore();
  const length = store.cart.length;

  console.log(length);
  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <p className="logo">SOLESPHERE</p>
        </Link>

        <div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Shop</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          <FaSearch />
          <Link to="/checkout" style={{ color: "black" }}>
            <FaCartPlus />
            {length > 0 ? length : null}
          </Link>
        </div>
      </div>

      <p className="nav-discount">Get 10% off on business sign up</p>
    </>
  );
}

export default NavBar;
