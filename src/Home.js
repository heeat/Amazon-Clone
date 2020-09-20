import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="1312"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="1332"
            title="The Undeground Railroad"
            price={13.32}
            image="https://images-na.ssl-images-amazon.com/images/I/81wqd6Pmb9L.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1352"
            title="Apple iPhone XR (64GB) - Yellow"
            price={599}
            image="https://images-na.ssl-images-amazon.com/images/I/51-RH0sNhTL._SL1000_.jpg"
            rating={4}
          />
          <Product
            id="1392"
            title="ASGARD® 3 Layer Protective Face Mask with NOSE CLIP, Certified by CE, ISO & GMP with Bacterial Filtration Efficiency(BFE)≥98.5%, Particle Filtration Efficiency(PEE)≥94% (Blue, BOX SEALED PACKAGING)"
            price={5.3}
            image="https://images-na.ssl-images-amazon.com/images/I/71qshn-Y67L._UL1500_.jpg"
            rating={2}
          />
          <Product
            id="1372"
            title="Dewalt DCD778S2T XR 18V 13mm Brushless Li-ion Cordless Hammer Drill Driver with 2x1.5 Ah Batteries included "
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/719HzbvXZ6L._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="1212"
            title="mCaffeine Naked & Raw Coffee Body Scrub, 100 g | Coconut | Tan Removal | Oily/Normal Skin | Paraben & SLS Free"
            price={10.44}
            image="https://images-na.ssl-images-amazon.com/images/I/71GQ78wr6GL._SL1500_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="1012"
            title="Nutella Hazelnut Spread with Cocoa, 350g "
            price={20.19}
            image="https://images-na.ssl-images-amazon.com/images/I/715eSstP-ZL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
