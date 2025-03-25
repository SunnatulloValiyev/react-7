import { useGlobalContext } from "../context/GlobalContext";

function YourCard() {
  const { cart, dispatch } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="your-default">
        <h1 className="carts">Your Cart (0)</h1>
        <img className="png-default" src="public/images/Empty Placeholder.png" alt="" />
      </div>
    );
  }

  return (
    <div className="your-cart">
      <h1 className="carts">Your Cart ({cart.length})</h1>
      
      <div className="total-product">
        {cart.map((item) => (
          <div className="product-one" key={item.id}>
            <div className="product-doc">
              <span className="p_name">{item.id}</span>
              <p className="p_price">Price: {item.count} x $5</p>
            </div>
            <div className="product-del">
              <button
                className="delete-id"
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-order">
        <h3>Total Order</h3>
        <h2>Total price: ${cart.reduce((acc, item) => acc + item.count * 5, 0)}</h2>
      </div>

      <div className="carbon">
        <span className="carbon-p">This is a carbon-neutral delivery</span>
      </div>

      <button className="confirm">Confirm Order</button>
    </div>
  );
}

export default YourCard;