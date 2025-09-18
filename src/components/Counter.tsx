interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
}

function Counter({ value, onChange }: CounterProps) {
  const increment = () => {
    if (value < 10) {
      onChange(value + 1);
      console.log(value + 1, "value + 1");
    }
  };

  const decrement = () => {
    if (value > 1) onChange(value - 1);
  };

  return (
    <div className="productCardCart__info__counter">
      <button
        onClick={decrement}
        className="productCardCart__info__counter__button"
      >
        -
      </button>
      <input
        type="number"
        value={value}
        readOnly
        className="productCardCart__info__counter__input"
      />
      <button
        onClick={increment}
        className="productCardCart__info__counter__button"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
