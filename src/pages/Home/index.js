import myImage from "../../images/Kalyan_Shadow_11-2 1.png";
import { latestProducts, exclusiveItems } from "../../utils";

function Home() {
  return (
    <div>
      <MiniContainer />
      <ExclusiveDeals />
      <LatestProducts />
    </div>
  );
}

export default Home;

function MiniContainer() {
  return (
    <div className="mini-container">
      <div className="info-container">
        <p className="header-one">Step Up Your Sneaker Game</p>
        <p className="header-two">
          Discover the latest and greatest in sneaker fashion. From exclusive
          releases to unbeatable deals, find your perfect pair today!
        </p>

        <button className="button-one">Explore Now</button>
      </div>

      <img
        src={myImage}
        alt="shopping-kicks"
        className="shopping-kicks"
        width="60%"
      />
    </div>
  );
}

function ExclusiveDeals() {
  return (
    <div>
      <h3>Exclusive Deals Just For You</h3>
      <div className="exclusive">
        <ul className="exclusive-container">
          {" "}
          {exclusiveItems.map((item) => (
            <Deals item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Deals({ item }) {
  const style = {
    width: "200px",
    marginTop: "1em",
    transform: "rotate(20deg)",
  };
  return (
    <li className="deal-items">
      <div className="deal-img">
        <img src={item.img} alt={item.id} style={style} />
      </div>
      <div className="item-discussion">
        <h2>{item.offer}</h2>
        <p>{item.description}</p>
      </div>
      <button className="button-two">Explore Now</button>
    </li>
  );
}

function LatestProducts() {
  return (
    <div className="product-container">
      <h3>Latest Products</h3>
      <div className="product">
        <ul className="products-list">
          {latestProducts.map((product) => (
            <Products product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Products({ product }) {
  return (
    <li className="list">
      {/* <div className="product-img">
      <p className="sales">sale</p>
      </div> */}
      <img src={product.photo} alt={product.brand} width="100%" />

      <div>
        <div className="product-details">
          <p className="product-price">{product.price}</p>
          {product.discount > 0 ? (
            <p className="green">{product.discount}% off</p>
          ) : null}
        </div>

        <span>
          {product.brand} <br />
        </span>
        <p className="product-brand">{product.brandType}</p>
      </div>
    </li>
  );
}
