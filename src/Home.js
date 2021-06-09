import React from "react";
import "./Home.css";
import Product from "./Product";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <ImageSlider className="home__image" slides={SliderData} />
        {/* <img
          className="home__image"
          src="https://dac8r2vkxfv8c.cloudfront.net/images/banner/582c-09-20-Imagesasdasfdsfsd.jpg"
          alt=""
        /> */}
        <div className="home__row">
          <Product
            id="10982345"
            title="Wilson A2000 SuperSkin DP15 11.5 Baseball Glove: WBW100109115"
            price={279.95}
            image="https://dac8r2vkxfv8c.cloudfront.net/images/products/f95b-09-20-wilson-a2000-superskin-dp15-11-5--baseball-glove--wbw100109115-33614-1_l.jpg"
            rating={5}
          />

          <Product
            id="1092355"
            title="2021 Louisville Slugger Meta BBCOR Baseball Bat: WBL2463010"
            price={499.95}
            image="https://dac8r2vkxfv8c.cloudfront.net/images/products/705b-05-21-2021-louisville-slugger-meta-bbcor-baseball-bat--wbl2463010-33507-1_l.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1092355"
            title="Nike Alpha Huarache 3 Elite Men's Low Molded Baseball Cleats"
            price={84.99}
            image="https://www.baseballmonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/n/i/nike-baseball-footwear-mens-alpha-huarache-3-elite-ck0976.jpg"
            rating={3}
          />
          <Product
            id="1092355"
            title="EvoShield XVT Senior Batting Helmet"
            price={29.99}
            image="https://www.baseballmonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/8/8/887768732912.jpg"
            rating={5}
          />
          <Product
            id="1092355"
            title="Wilson A1010S Blem Baseball - 1 Dozen"
            price={44.99}
            image="https://www.baseballmonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/0/2/026388000357.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1092355"
            title="All Star System 7 Pro Adult Catcher's Kit - 2020 Model"
            price={474.99}
            image="https://www.baseballmonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/0/2/029343055560.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
