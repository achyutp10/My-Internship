import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Userslist from './Userslist';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import Addpizza from './Addpizza';

function Adminscreen() {
  const userstate = useSelector(state => state.loginUserReducer)
  const { currentUser } = userstate
  const dispatch = useDispatch()

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = '/'
    }

  }, []);


  return (

    <div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: '35px' }} >Admin Panel</h2>

          <ul className='adminfunctions'>
            <li> <Link to={"/admin/userslist"} style={{ color: 'white' }} >Users List</Link> </li>
            <li> <Link to={"/admin/pizzaslist"} style={{ color: 'white' }}>Food List</Link> </li>
            <li> <Link to={"/admin/addpizza"} style={{ color: 'white' }}>Add New Food</Link> </li>
            <li> <Link to={"/admin/orderslist"} style={{ color: 'white' }}>Orders List</Link> </li>
          </ul>
          <Routes>
            <Route path='/admin' exact component={Userslist} />
            <Route path='/admin/userslist' exact component={Userslist} />
            <Route path='/admin/orderslist' exact component={Orderslist} />
            <Route path='/admin/pizzaslist' exact component={Pizzaslist} />
            <Route path='/admin/addpizza' exact component={Addpizza} />
          </Routes>

        </div>
      </div>


    </div>
  )
}

export default Adminscreen
