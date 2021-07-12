import React, { useEffect, useState } from "react";
import "./CheckoutAddress.css";
import db from "../Firebase/Firebase";
import { useHistory } from "react-router";
import { useStateContextValue } from "../context/StateProvider";

function CheckoutAddress() {
  const [{ user }] = useStateContextValue();
  const history = useHistory();

  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [pin, setPin] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [addressType, setAddressType] = useState("");

  const [add, setAdd] = useState([]);

  useEffect(() => {
    db.collection("address").onSnapshot((snapshot) =>
      setAdd(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          country: doc.data().country,
          number: doc.data().number,
          pin: doc.data().pin,
          location: doc.data().location,
          area: doc.data().area,
          landmark: doc.data().landmark,
          city: doc.data().city,
          state: doc.data().state,
          addressType: doc.data().addressType,
          userid: doc.data().userId,
        }))
      )
    );
  }, []);

  const addAddress = (e) => {
    e.preventDefault();

    db.collection("address").add({
      country,
      name,
      number,
      pin,
      location,
      area,
      landmark,
      city,
      state,
      addressType,
      userId: user?.uid,
    });
  };

  const buyProduct = (id) => {
    history.push(`/buyproduct/${id}`);
  };

  return (
    <div className="checkoutddress">
      <div className="checkoutddress_selectAddress">
        <h2>Select a Delivery Address</h2>
        <h5>
          Is the address you'd like to use displayed below? If so, click the
          corresponding "Deliver to this address" button. Or you can enter a new
          delivery address.{" "}
        </h5>
        <hr />
        <div className="checkoutddress_selectAddressDiv">
          {add.map((eachAdd) =>
            eachAdd.userid === user?.uid ? (
              <>
                <h3>{eachAdd?.name}</h3>
                <h6>{eachAdd?.location}</h6>
                <h6>{eachAdd?.area}</h6>
                <h6>
                  {eachAdd?.city} {eachAdd?.state} {eachAdd?.pin}
                </h6>
                <h6>{eachAdd?.country}</h6>
                <button onClick={() => buyProduct(eachAdd?.id)}>
                  Delever to This Address
                </button>
              </>
            ) : (
              ""
            )
          )}
        </div>
      </div>

      <hr />
      <h2>Add a New Address</h2>
      <form className="checkoutddress_form">
        <div className="checkoutddress_formContent">
          <label htmlFor="Country">Country/Region</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="checkoutddress_formContent">
          <label htmlFor="Name">Full Name</label>
          <input
            type="text"
            placeholder="Fist and Last Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="checkoutddress_formContent">
          <label htmlFor="Mob No">Mobile Number</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="checkoutddress_formContent">
          <label htmlFor="PIN code">PIN Code</label>
          <input
            type="number"
            placeholder="6 digit PIN code"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <div className="checkoutddress_formContent">
          <label htmlFor="">
            Flat, House no., Building, Company, Apartment
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="checkoutddress_formContent">
          <label htmlFor="">Area, Colony, Street, Sector, Village</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="checkoutddress_formContent">
          <label htmlFor="landmark">Landmark</label>
          <input
            type="text"
            placeholder="e.g Near xyz apartment"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>
        <div className="checkoutddress_formContent">
          <label htmlFor="city">Town/City</label>
          <input
            type="text"
            placeholder=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="checkoutddress_formContent">
          <label htmlFor="city">State / Province / Region</label>
          <input
            type="text"
            placeholder=""
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="checkoutddress_formContent">
          <label htmlFor="">Address Type</label>
          <select onChange={(e) => setAddressType(e.target.value)}>
            <option value="">Select an Address Type</option>
            <option value={addressType}>Home (7 am - 9 pm delivery)</option>
            <option value={addressType}>Office (10 am - 5 pm delivery)</option>
          </select>
        </div>
        <div className="checkoutddress_formContent">
          <button type="submit" onClick={addAddress}>
            Add Address
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutAddress;
