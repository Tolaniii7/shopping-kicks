import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-one">
        <h1>
          SOLESPHERE <div className="small-dash"></div>
          <span className="sub-span">Shoe Store</span>{" "}
        </h1>

        <div>
          <ul className="footer-links">
            <li>Home</li>
            <li>Shop</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="long-dash"></div>

      <div className="footer-two">
        <p className="footer-copyright">
          &copy; 2023 SOLESPHERE. All rights reserved
        </p>

        <p>Privacy Policy</p>
        <p>Terms of Use</p>

        <div style={{ color: "#fff" }}>
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
