import React from "react";
import "./Subtotal.css";
import CurrencyFromat from "react-currency-format";
import { useStateContextValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import CheckoutAddress from "./CheckoutAddress";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Subtotal() {
  const [{ basket }] = useStateContextValue();

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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

      <button onClick={openModal}>Proceed To Checkout</button>

      {/* modal */}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal_buttonContainer">
          <button className="modal_button" onClick={closeModal}>
            X
          </button>
        </div>

        <CheckoutAddress />
      </Modal>
    </div>
  );
}

export default Subtotal;
