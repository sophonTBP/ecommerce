import React from 'react'
import Link from "next/link";
import { urlFor } from '../lib/client';


/* 
"écouteur acoustique haut-parleur studio son"
ECOUTEUR ACOUSTIQUE HAUT-PARLEUR STUDIO SON

 */


const HeroBanner = ({ heroBanner }) => {
    return (<>
        <div className='hero-banner-container'>

            <p className='beats-solo'>{heroBanner.smallText}</p>
            <h3 className='mid-text'>{heroBanner.midText} </h3>

            <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image'></img>
            <div className='button-container'>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type="button">{heroBanner.buttonText}</button>
                </Link>


            </div>
            <div className='desc'>
                <p>{heroBanner.desc}</p>
            </div>

        </div>
        

    </>
    )
}

export default HeroBanner