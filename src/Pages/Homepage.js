import React from "react";
import Header from "../Components/Header";
import TechSkills from "../Components/TechSkills";

const Homepage = () => {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <TechSkills />
      </div>
      <style jsx>{`
        .homeContainer {
          margin-top: 4rem;
        }
      `}</style>
    </>
  );
};

export default Homepage;
