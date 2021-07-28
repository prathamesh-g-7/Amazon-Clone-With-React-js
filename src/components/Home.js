import React from "react";
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
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="2"
          title="Savya home Apollo high Back Office Chair with Adjustable arms and anyposition tilt Locking Mechanism (Black, Adj Arm)"
          price={80.53}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61xTHyNnDYL._SL1001_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="3"
          title="yestha U8 Wrist Watch Bluetooth Smartwatch Compatible with All Mobile Phones for Boys & Girls"
          price={39.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="4"
          title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
          price={42.99}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
          id="5"
          title="HP Envy 11th Gen Core i7 Processor 13.3-inch (33.78 cms) FHD Touchscreen Laptop (16GB/1TB SSD/Win 10/NVIDIA MX450 2GB/Natural Silver/1.3 kg), 13-ba1018TX"
          price={1342.24}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61gG61YpwoL._SL1280_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="6"
          title="LG UltraWide 29 Inch WFHD (2560 x 1080) IPS Display - HDR 10, AMD Free sync, Inbuilt 5W Speaker, sRGB 99%, Multi Tasking Monitor - 29WL50S"
          price={255.55}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71xMxbdxrsL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="7"
          title="DECORVAIZ Multipurpose Laptop Table with Dock Stand & Non-Slip Legs Foldable and Portable Lapdesk for Study & Bed"
          price={299}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51k9OmMZyIS.jpg"
        />
        <Product
          id="8"
          title="Cosmic Byte C1070T Interstellar Wired Gamepad for PC/PS3/Android support for Windows XP/7/8/10, Rubberized Texture, Drivers"
          price={1179.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41Pny%2B-hUxL.jpg"
        />
        <Product
          id="9"
          title="TP-Link Archer C6 Gigabit MU-MIMO Wireless Router, Dual Band 1200 Mbps Wi-Fi Speed, 5 Gigabit Ports, 4 External Antennas and 1 Internal Antenna WiFi Coverage with Access Point Mode, Qualcomm Chipset"
          price={2599.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51ax8peHlPL._SL1000_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="10"
          title="Prestige IRIS LPG Gas Stove, 2 Burner, Black, Powder coater Mild Steel with Glass Top, Manual"
          price={2719.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51JyelsZUKL._SL1100_.jpg"
        />
        <Product
          id="11"
          title="Diverse Men's Regular Formal Shirt"
          price={499.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81qlnA0rJEL._UL1500_.jpg"
        />
        <Product
          id="12"
          title="Nivia Encounter 6 Football Stud"
          price={699.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Uc-2nti-L._SL1500_.jpg"
        />
        <Product
          id="13"
          title="Tuelip Full Black Be Mine Printed Mug Tea and Coffee 350 Ml Ceramic Mug"
          price={299.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51bFGNwAOTL._SL1100_.jpg"
        />
        <Product
          id="14"
          title="Fur Jaden Navy Casual Backpack with USB Charging Port and 15.6 Inch Laptop Pocket"
          price={649.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91cRItPiw-L._SL1500_.jpg"
        />
        <Product
          id="15"
          title="STRIFF Laptop Stand, Multi-Angle Adjustable Laptop Riser with Foldable Legs and Phone Holder, Ventilated Notebook Stand Tray for MacBook, Desktop Computer, Tablet(Black)"
          price={1699.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/618u7wO2kML._SL1200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
