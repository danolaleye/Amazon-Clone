import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD5220._CB408289997_.jpg"
        alt="Home Banner"
      />

      {/* Product id, title, price, ratings, images */}
      <div className="home__row">
        <Product
          id="12341341"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, Sept. 13 2011"
          price={42.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="12341341"
          title="Ninja BL780C Supra Kitchen System - Black Silver"
          price={39.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/912UEX%2BNnyL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12341341"
          title="EKeurig K-Duo Essentials Single Serve and Carafe Coffee Maker, Black"
          price={128.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg"
        />
        <Product
          id="12341341"
          title="Amazon Smart Plug, works with Alexa"
          price={34.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51yy4dHf5VL._AC_SL1000_.jpg"
        />
        <Product
          id="12341344"
          title="Samsung Galaxy A51 (SM-A515F/DS) Dual SIM 128GB,4GB RAM (Black)"
          price={399.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61sAKMokIUL._AC_SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12341341"
          title="Bubba Trailblazer Vacuum-Insulated Stainless Steel Water Bottle, 40 oz, Stainless Steel"
          price={21.97}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61NrmDcNTtL._AC_SL1500_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
