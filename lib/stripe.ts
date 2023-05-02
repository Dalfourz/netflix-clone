import {
    createCheckoutSession,
    getStripePayments,
  } from '@stripe/firestore-stripe-payments'
  import { getFunctions, httpsCallable } from '@firebase/functions'
  import app from '../firebase'

  const payments = getStripePayments(app, {
    productsCollection: 'products',
    customersCollection: 'customers',
  })

  const loadCheckout = async (priceId: string) => {
    await createCheckoutSession(payments, {
        price: priceId,
        success_url: window.location.origin, //returning successful payment to origin site i.e landing page
        cancel_url: window.location.origin, //or another custom page
    }).then((snapshot) => window.location.assign(snapshot.url))
    .catch((error) => console.log(error.message))
  }

  export {loadCheckout}
  export default payments