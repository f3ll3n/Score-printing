import React from "react";

export function PageNotFound() {
    return (
        <div>
            <h1>
                Page not found: 404 Error
            </h1>
            <p>
                Maybe you mean:
            </p>
            <ul>
                <li>
                   <a href="/" className="underline">
                        Main page
                    </a> 
                </li>
            </ul>
        </div>
    )
}