import React from "react";
import { DisplayArea, TypingArea } from "../components";
import { WriteMap } from "../components/WriteMap/WriteMap";
import { ButtonControls } from "../containers";

export function HomePage(){
    return (
        <div className="wrapper-full bg-slate-200">
            <div className="wrapper bg-white p-5">
                {/* <WriteMap /> */}
                <DisplayArea />
                <TypingArea />
                <ButtonControls/>
            </div>
        </div>
    )
}