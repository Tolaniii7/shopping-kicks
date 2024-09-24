import { useEffect, useState } from "react";
import myImage from "../../images/Kalyan_Shadow_11-2 1.png";
import { exclusiveItems } from "../../utils";
import { FaCartPlus } from "react-icons/fa";
import useCartStore from "../../Store/Cart.js";

function Home() {
  // const [cart, setCart] = useState([]);
  const store = useCartStore();
  console.log(store);

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
            <Deals item={item} key={item.id} />
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

function ProductModal({ selectedId, closeModal, product }) {
  const store = useCartStore();
  const cart = store.cart;

  function handleCarting(product) {
    store.addToCart(product);
    closeModal();
  }

  const isAdded = cart.map((c) => c.id).includes(selectedId.id);
  // console.log(isAdded);

  useEffect(
    function () {
      document.title = `shopping-kicks | ${selectedId.name}`;

      return function () {
        document.title = "shopping-kicks";
      };
    },
    [selectedId]
  );

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img
          src={selectedId.image}
          alt={selectedId.name}
          className="product-img"
        />
        <p className="product-brand">{selectedId.name}</p>
        <div>
          <div className="product-details">
            <p className="product-price">$ {selectedId.price}</p>
            {selectedId.discount > 0 ? (
              <p className="green">{selectedId.discount}% off</p>
            ) : null}
          </div>

          <span>
            {selectedId.name} <br />
          </span>
          <p className="product-brand">{selectedId.type}</p>
          <p className="product-brand">{selectedId.gender}</p>
          <p className="product-brand">{selectedId.company}</p>
          <strong>
            <p className="product-brand">{selectedId.description}</p>{" "}
          </strong>
        </div>
        {!isAdded ? (
          <button className="button" onClick={() => handleCarting(selectedId)}>
            Add to cart <FaCartPlus />
          </button>
        ) : (
          <p className="button">Added to cart</p>
        )}
      </div>
    </div>
  );
}

function LatestProducts() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleselectedProduct(product) {
    setSelectedId(product);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(
    function () {
      async function fetchProducts() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://freeshoesapi-production.up.railway.app/api/v1/shoes?limit=16`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching products");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Product not found");
          setProduct(data.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchProducts();
    },
    [setProduct]
  );

  return (
    <div className="product-container">
      <h3>Latest Products</h3>
      <div className="product">
        {isLoading && <Loading />}
        {!isLoading && !error && (
          <ul className="products-list">
            {product?.map((product) => (
              <Products
                product={product}
                selectProduct={handleselectedProduct}
                key={product.id}
              />
            ))}
          </ul>
        )}
        {error && <ErrorMessage message={error} />}

        {isOpen && (
          <ProductModal selectedId={selectedId} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="loading">
      <strong>Loading.....</strong>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span>
      {message}
    </p>
  );
}

function Products({ product, selectProduct }) {
  return (
    <li className="list" onClick={() => selectProduct(product)}>
      <img src={product.image} alt={product.name} className="product-img" />

      <div>
        <div className="product-details">
          <p className="product-price">$ {product.price}</p>
          {product.discount > 0 ? (
            <p className="green">{product.discount}% off</p>
          ) : null}
        </div>

        <span>
          {product.name} <br />
        </span>
        <p className="product-brand">{product.type}</p>
      </div>
    </li>
  );
}
