import React from "react";
import "./Subtotal.css";
import CurrencyFromat from "react-currency-format";
import { useStateContextValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";

function Subtotal() {
  const [{ basket }] = useStateContextValue();

  return (
    <div className="subtotal">
      <CurrencyFromat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>

            <small className="subtotal_gift">
              <input type="checkbox" /> This Order Contains a Gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
