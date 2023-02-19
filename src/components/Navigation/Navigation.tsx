import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (): React.ReactElement  => {
    return(
        <header>
            <nav>
            <h3>Score-Printer</h3>
            <span>
                <Link to="/" className="mr-2 navbar-hover">Home</Link>
                <Link to="/settings" className="navbar-hover">Settings</Link>
            </span>
        </nav>
        </header>
        
    )
}