import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/ZDJjOTcyYWEt/ZDJjOTcyYWEt-ZGVjOWMzM2Et-w1500._CB415333836_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="10982345"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={14.97}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="1092355"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, dough Hook and Whisk, 5 Litre, Glass Bowl"
            price={239.0}
            image="https://i.ebayimg.com/images/g/ZXAAAOSw-19fB~El/s-l300.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1092355"
            title="All-new Echo (4th Gen, 2020 release) | With premium sound, smart home hub, and Alexa | Charcoal"
            price={99.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430060cv12d.jpg"
            rating={5}
          />
          <Product
            id="1092355"
            title="Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)"
            price={389.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71Ha06XS-VL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="1092355"
            title="Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial"
            price={389.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71wPLzgLNYL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1092355"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
            price={1097.95}
            image="https://images-na.ssl-images-amazon.com/images/I/712DMKbmPVL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
