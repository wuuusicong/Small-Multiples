import React,{Component} from "react";
import * as d3 from "d3";
import MenuContainer from "./MenuContainer";
import ColorRectContainer from "./Map/ColorRect/ColorRectContainer";
import MapContainer from "./Map/MapCountainer";
import Panel from "popo-react-panel";
import SelectRectContainer from "./Map/ColorRect/SelectRectContainer";
import emitter from "./event"
import MapSmallMultiples from "./Map2/MapSmallMultiples";
import LineMatrixContainer from "./LineChart/LineMatrixContainer";
import LineChart from "./Map2/LineChart"
import AreaChart from "./Map2/AreaChart"
import ScatterPlot from "./Map2/ScatterPlot";

function Content ({type}){
        console.log("type")
        console.log(type)
        const typesVis = {
            "Map":<MapSmallMultiples/>,
            "LineChart":<LineChart/>,
            "AreaChart":<AreaChart/>,
            "ScatterPlot":<ScatterPlot/>}
        return (
            <div className="centerContainer">
                {typesVis[type]}
            </div>
        );
    }


export default Content
