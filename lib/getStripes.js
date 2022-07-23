
import {loadStripe} from '@stripe/stripe-js'

import 'dotenv/config'

/* STRIPE_PUBLISHABLE_KEY */
let secretkey=`${process.env.STRIPE_PUBLISHABLE_KEY}`;
let stripePromise;

const getStripe =  () => {
  
    if(!stripePromise){
        stripePromise=  loadStripe(secretkey);
        
    }
  return stripePromise;  
}

export default getStripe;