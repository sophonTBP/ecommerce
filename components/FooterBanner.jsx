import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner:{discount,largeText1,largeText2,saleTime,smallText,midText,product,desc,buttonText,image}}) => {
    return (
        <div className='footer-banner-container' >
    
            <div className='banner-desc'>
                <div className='left'>
                <p className='discount'>{discount}</p>
                <h3>{largeText1}{" "}{largeText2}</h3>
                <p className='soldes'>{saleTime}</p>
                </div>
                <div className="center">
                <img src={urlFor(image)}
                className="footer-banner-image"
                ></img>
                <Link href={`/product/${product}`}
                >
                   <button className='footerBtn' type="button" >{buttonText}</button>  
                </Link>
                </div>
                <div className='right'>
                <p>{smallText}</p>
                <h3>{midText}</h3>
                <p>{desc}</p>
                
                
                </div> 
            </div>
        </div>
    )
}

export default FooterBanner