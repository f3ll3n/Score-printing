import React from "react";
import { Link } from "react-router-dom";

export function Navigation(){
    return(
        <header className="wrapper-full bg-gray-500 text-white shadow-md">
            <nav className="wrapper flex justify-between items-center h-[50px] px-5">
            <h3 className="font-bold">Score-Printer</h3>

            <span className="flex gap-8">
                <Link to="/" className="mr-2 navbar-hover">Home</Link>
                <Link to="/settings" className="navbar-hover">Settings</Link>
            </span>
        </nav>
        </header>
        
    )
}