import React from "react";
import HomeCom from "../components/Home/HomeCom.jsx";
import Page from "../components/HomePage";
import HomeCatalog from "../components/HomeCatalog/HomeCatalog.jsx";
import Homedvchp from "../components/Homedvchp/Homedvchp.jsx";
import Homebrand from "../components/Homebrand/Homebrand.jsx";
import HomeBanner from "../components/Homebrand/HomeBanner/HomeBanner.jsx";
function Home() {
  return (
    <div>
      <Page />
      <HomeCom />
      <HomeCatalog />
      <Homedvchp />
      <Homebrand />
      <HomeBanner />
    </div>
  );
}

export default Home;
