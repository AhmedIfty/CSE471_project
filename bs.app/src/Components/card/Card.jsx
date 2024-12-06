import { useState } from "react";
import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || !isNaN(value)) {
      setInputValue(value);
    }
  };
  const handleInputBlur = () => {
    if (inputValue === "") {
      setInputValue(0);
    } else {
      setInputValue(parseInt(inputValue, 10));
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt={item.title} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <div className="bottom">
        <div className="counterWithButtons">
            <button className="counterButton" onClick={handleDecrease}>
              -
            </button>
            <span className="counterValue">{counter}</span>
            <button className="counterButton" onClick={handleIncrease}>
              +
            </button>
            <span className="counterLabel">Sets</span>
          </div>
          <div className="counter">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              min="0"
              className="inputCounter"
            />
            <span className="counterLabel">Reps</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
