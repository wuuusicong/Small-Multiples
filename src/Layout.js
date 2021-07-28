import React from "react";
import Panel from "popo-react-panel";
import {Button,Upload,message,Divider} from "antd";
import MapContainer from "./Map/MapCountainer";
import MenuContainer from "./MenuContainer";
import ColorRectContainer from "./Map/ColorRect/ColorRectContainer";
import Content from "./Content";
import LineMatrixContainer from "./LineChart/LineMatrixContainer";
function Layout({imgSrc,data,getData,points}) {
    const style1 = {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
    }
    return (
        <div id='container' style={style1}>
            <Panel target="1">
                <div className="flex-container-column">
                    <p type="default" className="flex-item-2">Exploration of Small Multiples </p>
                    <Divider dashed />
                </div>
            </Panel>
            <Panel target="2">
                {/*<canvas className="item-fill" id="canvas"/>*/}
            </Panel>
            <Panel target="4">
               <Content/>
            </Panel>
        </div>
    );
}

export default Layout