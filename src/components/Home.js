import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="1"
          title="The Lean startup: How constant innovation creates radically successful bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="2"
          title="The Lean startup: How constant innovation creates radically successful bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61xTHyNnDYL._SL1001_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="3"
          title="The Lean startup: How constant innovation creates radically successful bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="4"
          title="The Lean startup: How constant innovation creates radically successful bussiness paperback"
          price={11.96}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
          id="5"
          title="The Lean startup: How constant innovation creates radically successful bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61gG61YpwoL._SL1280_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="6"
          title="The Lean startup: How constant innovation creates radically successful bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71xMxbdxrsL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
