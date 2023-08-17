import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

function Filter() {
  const dispatch = useDispatch()
  const [searchkey, setsearchkey] = useState('')
  const [category, setcategory] = useState('all')
  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
        <div className="col-md-3 d-flex align-items-center">
          <input onChange={(e) => { setsearchkey(e.target.value) }} value={searchkey} type="text" className="form-control" placeholder="Search Food" />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <select className="form-control mt-2" onChange={(e) => { setcategory(e.target.value) }} value={category}>
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <button className="btn btn-success mt-2 w-100" onClick={() => { dispatch(filterPizzas(searchkey, category)) }} >Search</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
