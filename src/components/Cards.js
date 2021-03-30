import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image from "./images/img-9.jpg";
import image2 from "./images/img-2.jpg";
import image3 from "./images/img-3.jpg";
import image4 from "./images/img-4.jpg";
import image8 from "./images/img-8.jpg";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinatons</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/Services"
            />
            <CardItem
              src={image2}
              text="Travel through the island of Bali in a private cruise"
              label="Luxury"
              path="/Services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image3}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/Services"
            />
            <CardItem
              src={image4}
              text="Travel through the island of Bali in a private cruise"
              label="Luxury"
              path="/Services"
            />
            <CardItem
              src={image8}
              text="Travel through the island of Bali in a private cruise"
              label="Luxury"
              path="/Services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
