import React from "react";
import HomeCom from "../components/Home/HomeCom.jsx";
import Page from "../components/HomePage";
import Homedvchp from "../components/Homedvchp/Homedvchp.jsx";
import Homebrand from "../components/Homebrand/Homebrand.jsx";
import HomeBanner from "../components/HomeBanner/HomeBanner.jsx";
import Products4 from "../components/P4/index.jsx";

function Home() {
  return (
    <div>
      <Page />
      <HomeCom />
      <Homedvchp />
      <Homebrand />
      <Products4 />
      <HomeBanner />
    </div>
  );
}

export default Home;
