import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out Favourute Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Explore the Hidden Waterfall Deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-3.jpg"
              text="Explore the Hidden Waterfall Deep inside the Amazon Jungle"
              label="Adrenaline"
              path="/products"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="/images/img-4.jpg"
              text="Explore the Hidden Waterfall Deep inside the Amazon Jungle"
              label="Mystery"
              path="/sign-up"
            />
            <CardItem
              src="/images/img-5.jpg"
              text="Explore the Hidden Waterfall Deep inside the Amazon Jungle"
              label="Mystery"
              path="/sign-up"
            />
            <CardItem
              src="/images/img-6.jpg"
              text="Explore the Hidden Waterfall Deep inside the Amazon Jungle"
              label="Mystery"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
