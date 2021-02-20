import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Filler text Filler text Filler text Filler text Filler text",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Filler text Filler text Filler text Filler text Filler text",
      },
      {
        icon: <FaShuttleVan />,
        title: "Complimentary Rides",
        info: "Filler text Filler text Filler text Filler text Filler text",
      },
      {
        icon: <FaBeer />,
        title: "Beer on Tap",
        info: "Filler text Filler text Filler text Filler text Filler text",
      },
    ],
  };
  render() {
    return (
      <div className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}
