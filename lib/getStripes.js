import {loadStripe} from '@stripe/stripe-js'



let stripePromise;

const getStripe =  () => {
  
    if(!stripePromise){
        stripePromise=  loadStripe(`pk_test_51L2yYoLKuAviX3g6vdqhn0ly100TRfuUuTtemxhZbWl995gi89xGc2hN7Sgj37E36YBzXQpBAzy6Xf5Bq1ib12Md00KE1Hrqso`);
        
    }
  return stripePromise;  
}

export default getStripe;