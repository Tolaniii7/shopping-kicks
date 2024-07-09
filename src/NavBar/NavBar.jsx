import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="nav-container">
        <p className="logo">SOLESPHERE</p>

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
          <Link to="/checkout">
            <FaCartPlus />
          </Link>
        </div>
      </div>

      <p className="nav-discount">Get 10% off on business sign up</p>
    </>
  );
}

export default NavBar;
