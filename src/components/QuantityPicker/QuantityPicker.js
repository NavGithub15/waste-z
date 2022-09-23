
export default function QuantityPicker({increment, decrement, quantity}) {
  return (
      <div className="qty">
        <span>Quantity</span>
        <button type="button" onClick={increment}>+</button>
        <span>{quantity}</span>
        <button type="button" onClick={decrement}>-</button>
      </div>
    );
}