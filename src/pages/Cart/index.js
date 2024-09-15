import { selectedProducts } from "../../utils";

function Checkout() {
  return (
    <div>
      <Cart />
    </div>
  );
}

export default Checkout;

function Cart() {
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
        <ProductCart />
        <CartSumarry />
      </div>
    </div>
  );
}

function ProductCart() {
  return (
    <div className="cart-container">
      {/* Table header  */}
      <div className="table-header">
        <p>Product</p>
        <div className="cart-features">
          <p>Quantity</p>
          <p>Price</p>
          <p>Subtotal</p>
        </div>
      </div>

      <ul>
        {selectedProducts.map((product) => (
          <Carting product={product} />
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
  return (
    <li className="cart-list">
      <div className="cart-item">
        <img src={product.image} alt={product.name} width="70" />
        <div className="cart-details">
          {/* <p className="cart-brand">{product.brandType}</p>
          <p className="cart-color">{product.colour}</p> */}
          <p className="cart-button">X Remove</p>
        </div>
      </div>

      <div className="numbers">
        <div className="quantity">
          <p> - </p>
          <p>1</p>
          <p> + </p>
        </div>

        <p className="cart-price">{product.price}</p>
        <p className="cart-totals">{product.totalPrice}</p>
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
