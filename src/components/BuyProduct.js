import React, { useState } from "react";
import "./BuyProduct.css";
import { useStateContextValue } from "../context/StateProvider";
import db from "../Firebase/Firebase";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import CurrencyFromat from "react-currency-format";
import { getBasketTotal } from "../context/reducer";
import { v4 } from "uuid";

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

function BuyProduct() {
  const [{ basket, user }] = useStateContextValue();
  const [address, setAddress] = useState([]);

  const { addressId } = useParams();

  db.collection("address")
    .doc(addressId)
    .onSnapshot((snapshot) => setAddress(snapshot.data()));

  const total = getBasketTotal(basket);

  const date = new Date().toLocaleString();

  const placeOrder = () => {
    basket.map((product) =>
      db.collection("orders").add({
        productUserId: user?.uid,
        productTitle: product.title,
        productUrl: product.image,
        productPrice: product.price,
        productRating: product.rating,
        productTotal: total,
        orderId: v4(),
        orderDate: date,
        userLocation: address?.location,
        userArea: address?.area,
        userCity: address?.city,
        userPin: address?.pin,
      })
    );

    basket.length = 0;
  };
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

  const callTwoFunction = (e) => {
    e.preventDefault();
    placeOrder();
    openModal();
  };

  return (
    <div className="buyproduct">
      <div className="buyproduct_section">
        {basket.map((item) => (
          <>
            <div className="buyproduct_info">
              <img src={item.image} alt="" className="buyproduct_img" />
              <div className="buyproduct_infoSide">
                <h5>{item.title}</h5>
                <h5>
                  <small>$</small>
                  <strong>{item.price}</strong>
                </h5>
                <div className="buyproduct_rating">
                  {Array(item.rating)
                    .fill()
                    .map((_) => (
                      <p>⭐</p>
                    ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* address details */}
      <div className="buyproduct_address">
        <div className="buyproduct_addressDetails">
          {basket?.length > 0 ? (
            <>
              <h2>Deliver To This Address</h2>
              <h3>{address?.name}</h3>
              <h6>{address?.location}</h6>
              <h6>{address?.area}</h6>
              <h6>
                {address?.city} {address?.state} {address?.pin}
              </h6>
              <h6>{address?.country}</h6>
              {/* grand total */}
              <CurrencyFromat
                renderText={(value) => (
                  <>
                    <p>
                      Subtotal ({basket.length} items) :{" "}
                      <strong>{`${value}`}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button
                className="buyproduct_addressDetailsButton"
                onClick={callTwoFunction}
              >
                Place Order
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

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
        <div className="modal_info">
          <div className="modal_infoImg">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/////mQD/lwD/lQD/kwD/mwD///3//fn/+/L/oyn/9OH//ff/477/6c//5MT/z4//1qD/nwD/+e3/wHD/2Kn/pzT/0pv/x33/79b/3K//rUX/tVT/sEL/58n/x4P/58P/qTD/qSj/sUr/uGH/qzv/s1X/wmf/oxz/t1v/umX/vG3/zoj/9+f/37z/pC//nxX/rEv/s13/0ZWSZ2VSAAAEgElEQVR4nO3afV+qPBgHcNnGJB5EkGCocNToaGZRvv8Xd4+Bpolmd+X8dH7fv1KLbVfX2LVhpwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL8Y190Bzarxdy3b60Wx7/v9J0+Eju4+aee467sioIzRCmPG9N4XujpzDRnq9B5MSomxh1B6p6NzobvS0Oo7Vjo03gekRt2Ld4Y7Ixb41sXb3edO2gNSpcpjeOne8O6CGHTe13k36w7oJgAbOzH5a1++R/aUynl773Yv33QjZoRWYTDn08m4UszNbVjIXx1T21qw6m5WXH7iNrKHZR67mbDDzf/FEekD1TZ3VA8GROXtKHP0LEF80ypX7dcvkzpTSKpnVeS5SlVKF3pyhXN+OHBhqqDQPxo6pLgmreuBaap7Ddqwb1T2mvoqBTGkzZ3/dm1zXVXcbro0MZnq6YkSLlgzgVmZaKuou26SN42LUk2dB11dUWJzs/5ROol0pKzwA7nXMeug9OquPGnoxxbveMWmdpJT6DkRl6vjqjljuYtSVbMkUr3x1c9zDRXbHmv5VmLL7ddsfbk5lOU3rG6ckKxTxWSmYvKqf3/qPm9TpQqLMY7tbucnN87VlR3Pn5JteW9G6gPLrF6x6MdaPhfvhANjdzdGaHm/tn+y7He8xxdzJz0nXv1+xqqXwRXs2aXehO1FRe5FisT9mQJ7lSYTRt+2fITkm/IorxKHDK7ibEdm7brcmUDNdnU+6gsVl5aK87PqS4RiPSr3tsAGKbxtJwr1gXf8Khdmj8j74wyZLsZw2RffU+Vaor8sDLrfCjF2znGE2mzMvqW1b+KO2cEhjwwLZcEsT72vTCRLPOWjgLF3AZEBethddusjletJk4oTFe1HX3Io5fMsScXKam69nLfu4d4+a360VrYMx21pHCRhddVZtnuJ8Fb+Dh1cx83kjRUHh7myzRhGy+Ey77ti9fGixEPxp58vZ3Miq9SWgMjtxDzav4yr3r+ORWeP1b89FhUVmGouMRpMx4uBHz31epknhLBrQnhZz43i5G42DQhTwTgWYTZ8V4XwzoLI6+uvTdpY0fDYSPbTRg3YNMtyflMrS9Osw/bB3xOjODyeWJnVzNEx4nPwdPzhsHZTh7QcM5/4A8pGbstNo88MOtRy5ngmkT+z84b4OTKJbtuf81kvhJTXHBL5bwz7hfndQSHEnKVh+1bKk9HSdoRzPuFPD0qKLwSEsnF8fNSeOdN9RHAeJ0tejjy//Fw8CA3ufe9k6RHqe9j0GdUYLC+fGIR+PO4TASFBEVenVddWjn2FiAaF8T+mUbUus3KWXMMT++/HHTsdvNwYn1mjKS2LV7/3a79ko7Ke21m8kBVq9e2ZE6FRn5vzcfJUnzT8qinTjgtXbmTuq2ferPl6UUO+JMF0+Cqr/uxXzpYjmh0vd+SOV3i9NF77j3mSJPmjH6fqmbjl8N3f/HecHO8/Fw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCv0HxO1OflORChkAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>

          <h3>Your Order Placed Successfully !</h3>
          <div className="modal_h5">
            <h5>Check Returns and Orders for More Details.</h5>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BuyProduct;
