import React, {useContext, useState} from "react";
import Panel from "popo-react-panel";
import {Button,Upload,message,Divider,Radio} from "antd";
import MapContainer from "./Map/MapCountainer";
import MenuContainer from "./MenuContainer";
import ColorRectContainer from "./Map/ColorRect/ColorRectContainer";
import Content from "./Content";
import LineMatrixContainer from "./LineChart/LineMatrixContainer";
import Mapping from "./Mapping/Mapping";
import Selection from "./Selection";
import MapSmallMultiples from "./Map2/MapSmallMultiples";
import LineChart from "./Map2/LineChart";
import AreaChart from "./Map2/AreaChart";
import ScatterPlot from "./Map2/ScatterPlot";

const VisSelection = React.createContext(null)
const AllType = ["Map","LineChart","ScatterPlot","AreaChart"]

const  Layout = ({imgSrc,data,getData,points}) => {
    const style1 = {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
    }
    let [target, setTarget] = useState(AllType[0])
    return (
        <VisSelection.Provider  value={{target, setTarget}}>
        <div id='container' style={style1}>
            <Panel target="1">
                <div className="flex-container-column">
                    <p type="default" className="flex-item-2">Exploration of Small Multiples </p>
                    <Divider dashed />
                </div>
            </Panel>
            <Panel target="2">
                <Selection  localContext={VisSelection} AllType={AllType}/>
            </Panel>
            <Panel target="3">
                <Content type={target}/>
            </Panel>
        </div>
        </VisSelection.Provider>
    );
}

// const VisType = ({target}) => {
//     return (
//         <div>
//             <Panel target="3">
//                 <div className="div_Container">
//                     <Content type={target}/>
//                 </div>
//             </Panel>
//             <Panel target="4">
//                 Mapping function
//             </Panel>
//         </div>
//     )
// }
//
// const VisContent = ({type}) => {
//     const typesVis = {
//         "Map":<MapSmallMultiples/>,
//         "LineChart":<LineChart/>,
//         "AreaChart":<AreaChart/>,
//         "ScatterPlot":<ScatterPlot/>}
//     return (
//         <div>
//             {typesVis[type]}
//         </div>
//     )
// }





export default Layout
