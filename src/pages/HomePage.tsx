import React from "react";
import { WriteMap } from "../components/WriteMap/WriteMap";

export function HomePage(){
    return (
        <div className="wrapper-full bg-slate-200">
            <div className="wrapper bg-white p-5">
                <WriteMap/>
            </div>
        </div>
    )
}