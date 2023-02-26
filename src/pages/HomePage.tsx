import React, {useState} from "react";
import { WriteMap } from "../components/WriteMap/WriteMap";
import { MainBlock } from "../containers/MainBlock/MainBlock";
//rewrite styles
export const HomePage: React.FC = () => {
    const [map, setMap] = useState<number>();
    return (
        <div>
            <MainBlock/>
            <div>
                
            </div>
        </div>
    )
}