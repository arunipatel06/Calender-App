import React from "react";
import MenuList from "./MenuList";
import ScoreCards from "./ScoreCards";
import Chart from "./Chart";

const HomePage = () => {
  return (
    <section>
      <MenuList />
      <div>
        <ScoreCards />
      </div>
      <div>
        <Chart />
      </div>
    </section>
  );
};

export default HomePage;
