import { FaSearch } from "react-icons/fa";

function NavBar() {
  // const element = <FontAwesomeIcon icon={faEnvelope} />;
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

        <div style={{ position: "relative" }}>
          <input type="search" />
          <FaSearch
            style={{ position: "absolute", top: "5px", right: "10px" }}
          />
        </div>
      </div>

      <p className="nav-discount">Get 10% off on business sign up</p>
    </>
  );
}

export default NavBar;
