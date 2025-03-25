import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

function AddDessertButton({ id }) {
  const { cart, dispatch } = useGlobalContext();
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    setClicked(true);
    dispatch({ type: "ADD_TO_CART", payload: { id, count } });
  };

  return (
    <button onClick={handleAddToCart} className={`addDessert ${clicked ? "back" : "clicked"}`}>
      {cart.find((item) => item.id === id) ? (
        <div className="counter">
          <button className="minus" onClick={() => dispatch({ type: "DECREMENT", payload: id })}>
            -
          </button>
          <span>{cart.find((item) => item.id === id)?.count}</span>
          <button className="plus" onClick={() => dispatch({ type: "INCREMENT", payload: id })}>
            +
          </button>
        </div>
      ) : (
        "Add to Cart"
      )}
    </button>
  );
}

export default AddDessertButton;
