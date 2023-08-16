import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orderActions'


function Checkout({ subtotal }) {
  const dispatch = useDispatch()

  function tokenHandler(token) {
    console.log(token)
    dispatch(placeOrder(token, subtotal))
  }

  return (
    <div>
      <StripeCheckout
        amount={subtotal * 130}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51NepFbJLevLStoLdSYyaLlbOc37VnJSGzPy2TeHYyOwibCUPRAuUbF4GFd7lHWBFSRUkmjxaOIXUj0hsrJm3dGfN00gjZFkele'
        currency='NPR'
      >
        <button className='btn btn-success'>Pay Now</button>
      </StripeCheckout>
    </div>
  )
}

export default Checkout
