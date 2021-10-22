import React from 'react'
import '../App.css';
import productData from "../Suppliers.json";
import "./Suppliers.css"

function Suppliers() {
    return (
        <div className = "supplierList">
        {
          productData && productData.map(item=>(
            <li>{item.name}</li>
          ))
        }</div>
    )
}

export default Suppliers
