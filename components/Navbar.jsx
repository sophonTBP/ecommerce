import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from "react-icons/ai"

import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>

      


        <Link  href="/" >
          <svg className='logo'
            

            viewBox="0 0 176.88 77.744"
            xmlns="http://www.w3.org/2000/svg"

          >
            <g
              aria-label="Audio"
              style={{
                fontSize: "50.9673px",
                lineHeight: 6.85,
                fontFamily: "'Black Ops One'",
                InkscapeFontSpecification: "'Black Ops One, Normal'",
                letterSpacing: ".908505px",
                fill: "#fff",
                stroke: "#fdfdfd",
                strokeWidth: 1.27419,
              }}
            >
              <path
                d="M94.787 151.027q2.497-11.264 2.497-16.921v-1.326q0-.866.408-1.274.458-.458.917-.51.51-.101 1.937-.101 1.478 0 3.058 1.07 1.63 1.07 1.63 2.905 0 .357-.458 4.434-.459 4.078-.611 10.449 1.732-.714 2.752-1.478 1.07-.816 1.427-.816.56 0 .56 1.07 0 1.02-1.58 2.65-1.58 1.58-3.16 2.6 0 1.121.102 3.568.153-.102.408-.102.306 0 .56.153.307.153.51.356.255.204.561.612.306.357.459.56.153.205.408.612.254.357.305.408.918 1.376.918 2.192 0 .764-.306 1.783-1.172 3.008-1.58 5.25-.204 1.07-1.223 1.07-1.121 0-1.58-.611-.408-.56-.663-.918-.204-.356-.408-1.019-.152-.663-.254-1.02-.102-.407-.204-1.223-.153-1.07-.204-2.14l-.051-.816q-.204-2.446-.51-7.44-1.325.458-4.077.56-.816 3.67-1.682 6.778-.816 3.058-2.752 4.893-1.886 1.835-4.638 1.835-.816 0-1.937-.255-6.575-1.784-8.97-8.307-.612-1.682-.612-2.956 0-3.059 2.548-4.18 5.505-2.497 10.755-2.497zm6.421-.51q-.203-4.485-.407-13.66-.408 2.345-1.275 7.034l-1.223 7.034q1.937-.204 2.905-.408zm-10.856 5.148q-6.218 0-9.938.866-2.09.408-2.09 1.53 0 .866 1.376 2.242t3.568 2.14q2.192.714 3.67.714 1.478 0 2.446-.51 1.02-.51 1.58-1.07.612-.56 1.172-1.835.714-1.58 1.478-4.077zM114.4 142.617q1.172 0 2.192.867.102.102.611.51.56.407.867.662.815.764.815 1.325 0 .51-.917 3.058-.918 2.548-1.937 5.403-1.325 3.516-1.325 3.873 0 .357.255.357.407 0 3.058-4.842 2.65-4.842 4.026-7.594.51-.969 1.427-.969 2.14 0 2.14 1.784 0 1.02-1.324 5.76-1.682 6.269-1.682 6.83 0 .509.255.509.305 0 1.172-2.65.866-2.702 1.223-2.702.204 0 .51.459 1.274 2.65 1.274 4.893 0 2.242-1.58 5.148-.714 1.376-1.988 1.376-.815 0-1.172-.408-1.02-1.172-1.223-1.58-.969-1.223-1.58-4.383-.357.662-.918 1.886-1.172 2.7-2.14 3.924-.612.867-1.58.867-.918 0-2.039-1.326-1.682-2.293-1.733-5.147 0-2.855.56-5.352.612-2.497 1.836-6.065l.153-.612q0-.407-.357-.407l-1.172.305q-.867 0-1.224-1.019-.815-1.835-.815-3.975 0-.612.51-.612l1.376.306zM147.57 161.679q0 2.803-1.477 2.803-1.172 0-2.039-1.223-.866-1.223-1.325-2.192-.459-1.019-.918-1.885-.458-.918-.815-2.141-.051.153-.306 1.07l-.408 1.376q-.611 2.243-.968 3.007-.306.714-.713 1.631-.357.867-.765 1.427-.408.51-.866 1.02-.918 1.07-2.243 1.07-1.274 0-2.497-1.478-2.09-2.446-3.058-6.116-.46-1.53-.46-3.517 0-1.988 1.224-4.383 1.223-2.446 3.67-5.352 2.446-2.905 4.536-2.905 1.121 0 2.548 1.07.306-2.752 1.02-7.797.713-5.046.866-6.575.153-1.58 1.07-1.58.969 0 1.376 1.02.46.968.46 1.936t-.154 1.784q-1.427 14.576-1.427 23.7 0 1.376.765 1.376.764 0 1.63-1.173.918-1.223 1.173-1.223.306 0 .306.408l-.357 2.192zm-8.205-12.385q0-.612-.612-.612-.56 0-1.376.51-2.65 1.478-4.383 4.587-1.682 3.109-1.682 6.218 0 1.886 1.172 1.886.46 0 1.02-.56 2.854-3.008 5.657-11.112.204-.51.204-.917zM158.877 131.2q0 1.682-1.428 4.69-1.427 2.956-2.7 4.28-.205.307-.612.307-1.275 0-1.275-2.04 0-2.038 1.784-5.708.357-.764.459-1.58.102-.815.102-.917.05-.153.05-.204.052-.102.052-.204.05-.153.05-.204.052-.101.103-.152.05-.102.102-.153.153-.102.815-.102.663 0 1.58.56.918.561.918 1.427zm.51 22.63q.56-.867.764-.867.255 0 .357 1.275.152 1.274.152 3.414 0 2.09-1.019 4.537-.968 2.395-2.854 3.873-1.07.816-1.988.816-.866 0-1.478-.357-.56-.408-1.02-1.274-.764-1.224-1.528-3.16-.714-1.937-.714-4.18 0-2.242.357-4.536.357-2.293.357-3.058 0-.815-.816-2.038-.815-1.275-.815-1.53 0-.254.153-.51.204-.305.458-.56.306-.306.561-.51.306-.203.663-.51 1.172-.968 2.14-.968.969 0 1.682.663.765.663.714 2.294 0 1.63-.765 6.167-.968 5.81-.968 6.676 0 .867.459.867 1.019 0 5.147-6.524zM174.668 154.238q0 6.167-3.568 10.958-1.274 1.63-2.854 1.63-1.53 0-2.447-.764-3.313-2.752-3.313-9.429 0-4.638 2.498-11.824.204-.51.356-.612.153-.153.51-.153.408 0 .969-.51.56-.56 1.834-.56 1.326 0 2.65.968 1.326.969 1.937 2.6 1.428 3.822 1.428 7.696zm-4.23-3.313q0-4.69-1.173-4.69-.56 0-1.02.867-2.038 4.842-2.038 11.57 0 1.682.051 2.548 4.18-3.21 4.18-10.295z"
                style={{
                  fontFamily: "'Ma Shan Zheng'",
                  InkscapeFontSpecification: "'Ma Shan Zheng, Normal'",
                }}
                transform="translate(-76.107 -128.372)"
              />
            </g>
            <g
              aria-label="SHOP"
              style={{
                fontSize: "28.3889px",
                lineHeight: 6.85,
                fontFamily: "'Black Ops One'",
                InkscapeFontSpecification: "'Black Ops One, Normal'",
                fill: "#fff",
                strokeWidth: 0.709726,
              }}
            >
              <path d="M23.569 72.33v-6.889h-7.957l-3.687-3.687v-4.145l3.687-3.673h2.08v6.529h8.455l3.562 3.687v4.505l-3.673 3.673zM18.662 57.25v-3.313h7.36l3.188 3.202v1.954H23.57V57.25zm-6.737 9.564h6.127v2.19h4.546v3.327h-7.582l-3.091-3.673zM44.278 53.936h6.183V72.33H44.32V64.86h-4.547v-3.687h4.505zM38.803 72.33h-6.127V53.936h6.127zM59.401 68.588h2.301v3.742H56.99l-3.728-3.673V57.609l3.728-3.673h4.713v3.729h-2.3zm5.614-10.923h-2.342v-3.73h4.754l3.715 3.674v11.048l-3.715 3.673h-4.754v-3.742h2.342zM73.942 72.33V53.936h6.016V72.33zm6.987-14.72v-3.674h6.875l3.673 3.673v6.307l-3.673 3.687H80.93v-3.687h4.45V57.61z" />
            </g>
            <path
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 1.35489,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M149.96 78.441a24.442 24.442 0 0 1 14.833-26.633M196.05 78.5a24.442 24.442 0 0 0-14.833-26.632"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 1.34793,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M179.625 121.763A24.64 18.097 81.772 0 0 197 104.143"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                stroke: "#fff",
                strokeWidth: 3.966,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M149.84 106.531a12.748 7.32 84.582 0 1-8.44-11.916 12.748 7.32 84.582 0 1 5.932-13.455l1.346 12.676zM199.46 81.421a7.32 12.748 7.462 0 1 5.572 13.498 7.32 12.748 7.462 0 1-8.782 11.793l1.513-12.656z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                stroke: "#fff",
                strokeWidth: 2.23952,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M151.742 77.228c.892-.086 1.805 1.858 2.048 4.358l2.355 24.26c.243 2.501-.28 4.583-1.172 4.669-.892.086-1.805-1.858-2.048-4.359l-2.354-24.26c-.243-2.5.28-4.583 1.171-4.668z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                strokeWidth: 1.11021,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="m172.089 122.945-.035-.25a1.337 1.337 0 0 1 1.084-1.495l6.779-1.209a1.222 1.222 0 0 1 1.439 1.044l.035.25a1.337 1.337 0 0 1-1.084 1.495l-6.78 1.208a1.222 1.222 0 0 1-1.438-1.043z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                strokeWidth: 0.411468,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M171.95 121.933c-.04-.281.496-.606 1.204-.728l.955-.164c.707-.122 1.31.007 1.35.288.042.281-.495.605-1.203.727l-.955.164c-.708.122-1.31-.007-1.351-.287z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                strokeWidth: 0.593104,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M150.45 78.197c.363-.025.703.302.762.733l.577 4.18c.06.432-.185.798-.548.823-.363.025-.703-.303-.763-.733l-.576-4.181c-.06-.43.185-.798.548-.822z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "none",
                stroke: "#000",
                strokeWidth: 1.35571,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M142.276 91.572a7.504 3.275 87.622 0 1 2.251-7.4"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 1.28238,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              d="M204.738 87.43s-4.964-5.886-5.278-6.009l-1.432 11.733 2.228-9.13z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                strokeWidth: 2.55467,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M174.562 81.449h.702v27.587h-.702z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                strokeWidth: 2.18342,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M168.734 85.167h.702v20.151h-.702zM177.522 85.167h.7v20.151h-.7z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                strokeWidth: 1.83502,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M162.906 88.126h.702v14.233h-.702zM180.481 88.126h.701v14.233h-.701z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                strokeWidth: 1.48375,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M171.694 89.896h.61v10.693h-.61zM165.866 89.896h.61v10.693h-.61zM183.44 89.896h.61v10.693h-.61z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                strokeWidth: 1.20439,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M160.038 91.72h.61v7.045h-.61zM186.309 91.72h.61v7.045h-.61z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                strokeWidth: 0.797039,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M157.17 93.7h.61v3.085h-.61zM189.177 93.7h.61v3.085h-.61z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 5.41955,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M157.403 56.739a24.442 24.442 0 0 1 30.471-.883"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                fill: "#fff",
                stroke: "#fff",
                strokeWidth: 2.23952,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M195.034 76.488c-.892-.086-1.805 1.858-2.048 4.359l-2.354 24.26c-.243 2.5.28 4.583 1.171 4.668.892.086 1.806-1.858 2.048-4.358l2.355-24.26c.243-2.501-.28-4.583-1.172-4.669z"
              transform="translate(-30.314 -46.265)"
            />
            <path
              style={{
                stroke: "#000",
                strokeWidth: 0.475118,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers",
              }}
              d="M196.08 76.884c-.243-.023-.471.29-.511.702l-.387 4.002c-.04.412.124.763.368.787.243.023.471-.29.51-.703l.387-4.001c.04-.413-.124-.763-.367-.787z"
              transform="translate(-30.314 -46.265)"
            />
          </svg>
        </Link>
      




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