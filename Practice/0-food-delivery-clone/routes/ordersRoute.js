const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51NepFbJLevLStoLdLepnROAkMQ0NScqXbvY0bgBVPk5tV3w3vWqGqsG9x2nzbfcwsVoAM0Ubee6M8vz91Oi6MvIp00BMjxmrS0')

router.post('/placeorder', async (req, res) => {

  const { token, subtotal, currentUser, cartItems } = req.body

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    })

    const payment = await stripe.charges.create({
      amount: subtotal * 130,
      currency: 'NPR',
      customer: customer.id,
      receipt_email: token.email
    }, {
      idempotencyKey: uuidv4()
    })

    if (payment) {
      res.send('Payment Done')
    } else {
      res.send('Payment failed')
    }

  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' + error })

  }



})

module.exports = router