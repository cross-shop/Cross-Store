import React from 'react'
import HomeCom from "../components/Home/HomeCom.jsx";
import Page from '../components/HomePage';
import HomeNew from '../components/HomeNew/HomeNew.jsx';
import HomeCatalog from '../components/HomeCatalog/HomeCatalog.jsx';
import Homedvchp from '../components/Homedvchp/Homedvchp.jsx';
import Homebrand from '../components/Homebrand/Homebrand.jsx';
function Home() {
  return (
    <div>
      <Page />
      <HomeCom />
      <HomeNew/>
      <HomeCatalog/>
      <Homedvchp/>
      <Homebrand/>
    </div>
  )
}

export default Home
