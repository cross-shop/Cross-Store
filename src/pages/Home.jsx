import React from "react";
import Banner from "../components/Banner/Banner";
import Status from "../components/Status/Status";
import P1 from "../components/P1/index..jsx";
import P2 from "../components/P2";
import P3 from "../components/P3";
import P4 from "../components/P4";
import HomeBanner from "../components/HomeBanner/HomeBanner.jsx";

function Home() {
  return (
    <div>
      <Banner />
      <Status />
      <P1 />
      <P2 />
      <P3 />
      <P4 />
      <HomeBanner />
    </div>
  );
}

export default Home;
