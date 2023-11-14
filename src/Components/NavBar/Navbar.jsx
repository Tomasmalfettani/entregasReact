import React from "react";
import "./navBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

function NavBar() {

    const enlaces = [
        "Oversize",
        "Talle Unico"
    ]
    
    return (
        <>
        <Link to="/">
            <h1>Inicio</h1>
        </Link>

        <ul>
            {enlaces.map((e, id) =>
                <li key={id}>
                    <Link to={`${e}`}>
                        {e}
                    </Link>
                </li>
            )}
        </ul>

        <CartWidget/>
    </>
    );
}

export default NavBar;