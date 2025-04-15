import React from 'react';
import './Homebrand.scss';
import { NavLink } from 'react-router-dom';
import air from './image/air.png';
import nike from './image/nike.png';
import yeezy from './image/yeezy.png';
import salomon from './image/salomon.png';
import adidas from './image/adidas.png';
import off from './image/off.png';
import converse from './image/converse.png';
import nb from './image/nb.png';
import asics from './image/asics.png';
import vans from './image/vans.png';
import anta from './image/anta.png';
import fila from './image/fila.png';
import puma from './image/puma.png';
import crocs from './image/crocs.png';
import ugg from './image/ugg.png';
import under from './image/under.png';
import li from './image/li.png';
import gucci from './image/gucci.png';
import one from './image/361.png';
import reebok from './image/reebok.png';
import sk from './image/skechers.png';
import dior from './image/dior.png';
import casio from './image/casio.png';
import on from './image/on.png';


const brands = [
  air, nike, yeezy, salomon, adidas, off, converse, nb,
  asics, vans, anta, fila, puma, crocs, ugg, under,
  li, gucci, one, reebok, sk, dior, casio, on
];

function Homebrand() {
  return (
    <div className='brand'>
      <h1>ПРЕДСТАВЛЕННЫЕ БРЕНДЫ</h1>
      <div className='all-brands'>
        {/* {brands.map((src, index) => (
          <div key={index} className='brand-img'>
            <img src={src} alt={`brand-${index}`} />
          </div>
        ))} */}
       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={air} alt="" />
        </NavLink>

       </div>

       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={nike} alt="" />
        </NavLink>
       </div>
       
       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={yeezy} alt="" />
        </NavLink>
       </div>

       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={salomon} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={adidas} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={off} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={converse} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={nb} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={asics} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={vans} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={anta} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={fila} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={puma} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={crocs} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={ugg} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={under} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={li} alt="" />
        </NavLink>
       </div>

       
       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={gucci} alt="" />
        </NavLink>
       </div>

       
       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={one} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={reebok} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={sk} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={dior} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={casio} alt="" />
        </NavLink>
       </div>


       <div className="brand-img">
        <NavLink to={"/air"}>
        <img src={on} alt="" />
        </NavLink>
       </div>







      </div>
    </div>
  );
}

export default Homebrand;
