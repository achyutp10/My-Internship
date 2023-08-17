import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Ordersscreen() {

  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.getUserOrdersReducer)
  const { orders, error, loading } = orderstate

  useEffect(() => {

    dispatch(getUserOrders())

  }, []);

  return (
    <div>
      <h2 style={{ fontsize: '35px' }} >Orders</h2>
      <hr />
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error='Something went wrong' />}
        {orders && orders.map(order => {
          return <div className="col-md-8 m-3 p-1" style={{ backgroundColor: '#DBA6F7', borderRadius: '16px', boxShadow: "5px 10px #ABA6F9" }}>
            <div className="flex-container">
              <div className="text-start w-100 m-1">
                <h2 style={{ fontsize: '25px' }} >Items</h2>
                <hr />
                {order.orderItems.map(item => {
                  return <div>
                    <p>{item.name} <br /> [{item.varient}] * {item.quantity} = {item.price}</p>
                  </div>
                })}
              </div>
              <div className="text-start w-100 m-1">
                <h2 style={{ fontsize: '25px' }} >Address</h2>
                <hr />
                <p>Street: {order.shippingAddress.street}</p>
                <p>City: {order.shippingAddress.city}</p>
                <p>Country: {order.shippingAddress.country}</p>
                <p>Pincode: {order.shippingAddress.pincode}</p>
              </div>
              <div className="text-start w-100 m-1">
                <h2 style={{ fontsize: '25px' }} >Order info</h2>
                <hr />
                <p>Order Amount: {order.orderAmount}</p>
                <p>Date: {order.createdAt.substring(0, 10)}</p>
                <p>Transaction Id: {order.transactionId}</p>
                <p>Order Id: {order._id}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
export default Ordersscreen
