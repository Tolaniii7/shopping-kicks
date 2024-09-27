import { useEffect, useState } from "react";
import useCartStore from "../../Store/Cart.js";

function Checkout() {
  return (
    <div>
      <Cart />
    </div>
  );
}

export default Checkout;

function Cart() {
  const store = useCartStore();
  const cart = store.cart;

  useEffect(function () {
    document.title = "checkout";

    return function () {
      document.title = "SOLESPHERE";
    };
  }, []);

  return (
    <div>
      <h4 className="cart-header">Cart</h4>
      <div className="checkout-menu">
        <p className=" menu">
          <span>1</span>Shopping Cart
        </p>
        <p className=" menu">
          <span>2</span>checkout-details
        </p>
        <p className=" menu">
          <span>3</span>Order Complete
        </p>
      </div>

      <div className="carting-menu">
        <ProductCart cart={cart} />
        <CartSumarry />
      </div>
    </div>
  );
}

function ProductCart({ cart }) {
  return (
    <div className="cart-container">
      <div className="table-header">
        <p>Product</p>
        <div className="cart-features">
          <p>Quantity</p>
          <p>Price</p>
          <p>Subtotal</p>
        </div>
      </div>

      <ul>
        {cart.map((product) => (
          <Carting product={product} key={product.id} />
        ))}
      </ul>

      <div className="coupon">
        <p className="coupon-question">Have a Coupon?</p>
        <p className="coupon-instruction">
          Add your code for an instant cart discount
        </p>{" "}
        <input className="coupon-input" type="text-area" placeholder="coupon" />
      </div>
    </div>
  );
}

function Carting({ product }) {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  const store = useCartStore();

  function handleDeleteProduct(product) {
    store.removeFromCart(product);
  }

  function reduceQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }
  const price = +product.price;

  const subTotal = price * quantity;

  return (
    <li className="cart-list">
      <div className="cart-item">
        <img src={product.image} alt={product.name} width="60" />
        <div className="cart-details">
          <p className="cart-brand">{product.type}</p>
          <p className="cart-brand">{product.company}</p>

          <button
            className="cart-button"
            onClick={() => handleDeleteProduct(product)}
          >
            X Remove
          </button>
        </div>
      </div>

      <div className="numbers">
        <div className="quantity">
          <button className="cart-button" onClick={reduceQuantity}>
            <p>-</p>
          </button>
          <p>{quantity}</p>
          <button className="cart-button" onClick={increaseQuantity}>
            <p>+</p>
          </button>
        </div>

        <p className="cart-price">${product.price}</p>
        <p className="cart-totals"> ${subTotal.toFixed(2)}</p>
      </div>
    </li>
  );
}

function CartSumarry() {
  return (
    <div className="summary-container">
      <h4>Cart Summary</h4>
      <div>
        <div className="summary-option">
          <div className="checkbox">
            <input type="radio" value="" />
            <p>Free Shopping</p>
          </div>
          <p># 0.00</p>
        </div>
        <div className="summary-option">
          <div className="checkbox">
            <input type="radio" value="" />
            <p>Express shipping</p>
          </div>
          <p>#2,340.00</p>
        </div>
        <div className="summary-option">
          <div className="checkbox">
            <input type="radio" value="" />
            <p>pick-up</p>
          </div>

          <p># 0.00</p>
        </div>

        <div className="sub-total">
          <p>Subtotal</p>
          <p># 620,000.00</p>
        </div>
        <div className="total">
          <p>Total</p>
          <p># 620,000.00</p>
        </div>
      </div>
      <div className="checkout-button">
        {" "}
        <p className="checkout">Checkout</p>
      </div>
    </div>
  );
}
