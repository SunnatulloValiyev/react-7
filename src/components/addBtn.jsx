import { useState, useEffect } from "react";

function AddDessertButton({ id }) {
  const clickedKey = `clicked_${id}`;
  const countKey = `count_${id}`;

  const storedClicked = JSON.parse(localStorage.getItem(clickedKey)) || false;
  const storedCount = JSON.parse(localStorage.getItem(countKey)) || 1;

  const [clicked, setClicked] = useState(storedClicked);
  const [count, setCount] = useState(storedCount);

  useEffect(() => {
    localStorage.setItem(clickedKey, JSON.stringify(clicked));
    localStorage.setItem(countKey, JSON.stringify(count));
  }, [clicked, count]);

  return (
    <button
      onClick={() => setClicked(!clicked)}
      className={`addDessert ${clicked ? "back" : "clicked"}`}
    >
      {clicked ? (
        <div className="counter">
          <button
            className="minus"
            onClick={(e) => {
              e.stopPropagation();
              setCount((prevCount) => Math.max(prevCount - 1, 1)); 
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className="plus"
            onClick={(e) => {
              e.stopPropagation();
              setCount((prevCount) => prevCount + 1);
            }}
          >
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
