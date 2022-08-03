import React from 'react'
import { useSelector } from 'react-redux';
import {
    Link
} from "react-router-dom";
export const Header = (props) => {
    const cartValue = useSelector((state) => state.cart.length)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">{props.name}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        <span className="left" style={{ color: "red" }}><b>Cart Item: {cartValue}</b></span>
                    </ul>

                </div>
            </nav>
            <div className="hwrap"><div className="hmove">
                <div className="hitem">50% OFF For first 10 Customers</div>
                <div className="hitem">50% off</div>
            </div></div>


        </>
    )
}
