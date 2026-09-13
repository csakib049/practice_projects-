import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h2>we have all types of product .</h2>
            <pre>
                which one would u like sir?
                men ? or women?
            </pre>


            <div> 
                <Link to='/product/men'>Men</Link>
                <Link to='/product/women'>Women</Link>

            </div>

            <Outlet/>
        </div>
    )
}

export default Product
