import React from "react";
import "./Homebrand.scss";
import { NavLink } from "react-router-dom";
import nike from "./image/nike.png";
import yeezy from "./image/yeezy.png";
import salomon from "./image/salomon.png";
import adidas from "./image/adidas.png";
import converse from "./image/converse.png";
import nb from "./image/nb.png";
import asics from "./image/asics.png";
import vans from "./image/vans.png";
import fila from "./image/fila.png";
import puma from "./image/puma.png";
import crocs from "./image/crocs.png";
import ugg from "./image/ugg.png";
import under from "./image/under.png";
import li from "./image/li.png";
import gucci from "./image/gucci.png";
import dior from "./image/dior.png";

function Homebrand() {
  return (
    <div className="brand container">
      <h1>ПРЕДСТАВЛЕННЫЕ БРЕНДЫ</h1>
      <div className="all-brands">
        <div className="brand-img">
          <NavLink to="/nike">
            <img src={nike} alt="Nike" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/adidas">
            <img src={adidas} alt="Adidas" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/puma">
            <img src={puma} alt="Puma" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/reebok">
            <img src={li} alt="Reebok" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/converse">
            <img src={converse} alt="Converse" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/nb">
            <img src={nb} alt="New Balance" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/yeezy">
            <img src={yeezy} alt="Yeezy" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/salomon">
            <img src={salomon} alt="Salomon" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/crocs">
            <img src={crocs} alt="Crocs" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/ugg">
            <img src={ugg} alt="UGG" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/fila">
            <img src={fila} alt="Fila" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/vans">
            <img src={vans} alt="Vans" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/asics">
            <img src={asics} alt="Asics" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/gucci">
            <img src={gucci} alt="Gucci" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/dior">
            <img src={dior} alt="Dior" />
          </NavLink>
        </div>

        <div className="brand-img">
          <NavLink to="/under">
            <img src={under} alt="Under Armour" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Homebrand;