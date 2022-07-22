import {loadStripe} from '@stripe/stripe-js'

/* STRIPE_PUBLISHABLE_KEY */
let secretkey="pk_test_51L2yYoLKuAviX3g66opoAtcqx3NVlLTTcL10OigdTpsGpy884GBnhWIbsIKf3QXG53oFQqMSiS6AL1bzZm7m6Qtv00sSsvKLEM";
let stripePromise;

const getStripe =  () => {
  
    if(!stripePromise){
        stripePromise=  loadStripe(secretkey);
        
    }
  return stripePromise;  
}

export default getStripe;