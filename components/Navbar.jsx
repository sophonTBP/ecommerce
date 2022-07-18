import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from "react-icons/ai"

import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>

      <p className='logo'>
       
        <svg
    width={54.37}
    
    viewBox="0 0 250.129 281.627"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <defs>
      <path id="b" d="M148.704 57.476h301.857v210.218H148.704z" />
      <path id="a" d="M97.142 95.805h444.869v220.006H97.142z" />
    </defs>
    <g transform="translate(-533.31 -650.358)">
      <path
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          paintOrder: "stroke fill markers",
        }}
        transform="rotate(170.535)"
        d="M-439.536-845.554a90.2 90.2 0 0 1-70.155 87.945"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          paintOrder: "stroke fill markers",
        }}
        transform="scale(1 -1) rotate(-9.465)"
        d="M857.87-629.488a90.2 90.2 0 0 1-70.155 87.945"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          paintOrder: "stroke fill markers",
        }}
        transform="matrix(.02176 .99976 .99683 .07952 0 0)"
        d="M868.946 665.26a90.36 67.55 0 0 1-70.28 65.86"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          paintOrder: "stroke fill markers",
        }}
        transform="matrix(.97122 .2382 -.01973 .9998 0 0)"
        d="M603.766 721.753a28.048 46.436 0 0 1-32.806-36.167 28.048 46.436 0 0 1 21.429-54.766l6.036 45.347z"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          paintOrder: "stroke fill markers",
        }}
        transform="matrix(-.89368 -.4487 .2421 -.97025 0 0)"
        d="M-942.768-360.464a28.048 46.436 0 0 1-32.807-36.168 28.048 46.436 0 0 1 21.43-54.766l6.035 45.347z"
      />
      <rect
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 8.26459,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        width={11.936}
        height={123.419}
        x={497.336}
        y={809.241}
        ry={16.735}
        transform="rotate(-5.492) skewX(.052)"
      />
      <rect
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 4.09848,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          paintOrder: "stroke fill markers",
        }}
        width={10.389}
        height={34.869}
        x={-1031.924}
        y={519.941}
        ry={4.728}
        transform="matrix(-.13862 -.99035 .98447 -.17556 0 0)"
      />
      <rect
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.51872,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          paintOrder: "stroke fill markers",
        }}
        width={3.785}
        height={13.143}
        x={-1022.002}
        y={514.729}
        ry={4.783}
        transform="matrix(-.14358 -.98964 .98552 -.16955 0 0)"
        rx={1.892}
      />
      <rect
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.75335,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          paintOrder: "stroke fill markers",
        }}
        width={3.257}
        height={20.356}
        x={498.06}
        y={810.551}
        ry={2.76}
        transform="rotate(-5.518)"
      />
      <path
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 5.0031,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        transform="matrix(-.99938 .03509 -.04028 -.99919 0 0)"
        d="M-511.168-828.833a12.085 27.693 0 0 1-9.4 27"
      />
      <path
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 4.73242,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M774.743 794.94s-18.318-21.723-19.478-22.176l-5.285 43.3 8.22-33.694z"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 9.42762,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        d="M663.383 772.867h2.588v101.806h-2.588z"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 8.05758,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        d="M641.877 786.586h2.588v74.367h-2.588zM674.305 786.586h2.588v74.367h-2.588z"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 6.77185,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        d="M620.37 797.506h2.588v52.527h-2.588zM685.226 797.506h2.588v52.527h-2.588z"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 5.47555,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        d="M652.798 804.04h2.252v39.46h-2.252zM631.291 804.04h2.252v39.46h-2.252zM696.147 804.04h2.252v39.46h-2.252z"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 4.44462,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        d="M609.784 810.77h2.252v26h-2.252zM706.733 810.77h2.252v26h-2.252z"
      />
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 2.94135,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        d="M599.199 818.077h2.252v11.387h-2.252zM717.318 818.077h2.252v11.387h-2.252z"
      />
      <path
        style={{
          fill: "none",
          stroke: "#010101",
          strokeWidth: 20,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        transform="rotate(-130.239)"
        d="M-907.987 17.71a90.2 90.2 0 0 1-70.156 87.944"
      />
      <rect
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 8.26459,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        width={11.936}
        height={123.419}
        x={-814.338}
        y={680.379}
        ry={16.735}
        transform="matrix(-.99541 -.0957 -.0966 .99532 0 0)"
      />
      <rect
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.75335,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          paintOrder: "stroke fill markers",
        }}
        width={3.257}
        height={20.356}
        x={-813.672}
        y={681.096}
        ry={2.76}
        transform="scale(-1 1) rotate(-5.518)"
      />
    </g>
  </svg>
  <Link href="/" >AUDIO SHOP</Link>
      </p>
      



      
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
       <span className='cart-text'>votre panier:</span>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar