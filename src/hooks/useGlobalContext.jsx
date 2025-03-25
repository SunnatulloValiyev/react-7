import { useGlobalContext } from "../context/GlobalContext"; 

function AddDessertButton({ id }) {
  const { dispatch } = useGlobalContext(); 

  return (
    <button
      onClick={() => dispatch({ type: "ADD_TO_CART", payload: { id } })}
      className="addDessert"
    >
      Add to Cart
    </button>
  );
}

export default AddDessertButton;
