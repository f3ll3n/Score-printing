import React from "react";

export function PageNotFound() {
    return (
        <div className="wrapper pageNotFound">
            <div>
            <h1 className="font-bold text-3xl">
                Page not found: 404 Error
            </h1>
            <p className="text-2xl p-10">
                Maybe you mean:
            </p>
            <ul>
                <li>
                   <a href="/" className="underline text-2xl text-blue-700 ">
                        Main page
                    </a> 
                </li>
            </ul>
            </div>
        </div>
    )
}