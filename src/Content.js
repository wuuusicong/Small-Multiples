import React,{Component} from "react";
import * as d3 from "d3";
import MenuContainer from "./MenuContainer";
import ColorRectContainer from "./Map/ColorRect/ColorRectContainer";
import MapContainer from "./Map/MapCountainer";
import Panel from "popo-react-panel";
import SelectRectContainer from "./Map/ColorRect/SelectRectContainer";
import emitter from "./event"
import MapSmallMultiples from "./Map/MapSmallMultiples";
import LineMatrixContainer from "./LineChart/LineMatrixContainer";

class Content  extends Component{
    constructor(props) {
        super(props);

    }
    componentDidMount() {
    }
    render() {
        console.log(this.state)
        const style1 = {
            margin: 0,
            padding: 0,
        }
        return (
            <div className="flex-container-column">
                <MenuContainer/>
                <MapSmallMultiples />
                {/*<LineMatrixContainer/>*/}
            </div>
        );
    }
}


export default Content