import React from "react";
import { Link } from "react-router-dom";

export function PageNotFound() {
    return (
        <div>
            <h1>
                Page not found: 404 Error
            </h1>
            <p>
                Did you mean:
            </p>
            <ul>
                <li>
                   <Link to="/" className="underline">
                        Main page
                    </Link> 
                </li>
            </ul>
        </div>
    )
}