import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import StyledHero from "../components/styledHero";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe rooms starting at only $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <StyledHero>Hello</StyledHero>
    </>
  );
}
