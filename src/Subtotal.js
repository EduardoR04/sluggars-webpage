import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({basket.length} items):{" "}
          <strong>{getBasketTotal(basket)}</strong>
        </p>
        <br />
        <small className="subtotal__gift">
          <input type="checkbox" />
          This order contains a gift
        </small>
        <br />
      </>
      <CurrencyFormat
        // renderText={(value) => (
        //   <>
        //     <p>
        //       Subtotal ({basket.length} items): <strong>{value}</strong>
        //     </p>
        //     <small className="subtotal__gift">
        //       <input type="checkbox " />
        //       This order contains a gift
        //     </small>
        //   </>
        // )}
        decimalScale={2}
        // value={}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
