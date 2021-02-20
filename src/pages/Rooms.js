import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return to homepage
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}
