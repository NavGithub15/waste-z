import "./QuantityPicker.scss"
import addIcon from "../../styles/assets/icons/plus.svg";
import removeIcon from "../../styles/assets/icons/subtract.svg";

export default function QuantityPicker({increment, decrement, quantity}) {
  return (
      <div className="qty">
        <h4 className="qty__text">Quantity</h4>
        <div className="qty__cta-wrapper">
        <button className="qty__cta" type="button" onClick={increment}><img className="qty__icon" src={addIcon} alt="" /></button>
        <span className="qty__number">{quantity}</span>
        <button className="qty__cta" type="button" onClick={decrement}> <img className="qty__icon" src={removeIcon} alt="" /> </button>
        </div>
      </div>
    );
}