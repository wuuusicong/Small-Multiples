import React,{Component} from "react";
import * as d3 from "d3";
import SelectRect from "./SelectRect";
import SelectText from "./SelectText";
import SelectRectContainer from "./SelectRectContainer";

class ColorRectContainer  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            colorGradient:this.props.colorGradient,
            colorAll:this.props.colorAll,
            num:this.props.num
        }
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
            <div className="div_small_menu_bar">
                <SelectText colorAll={this.state.colorAll} colorChange={this.props.colorChange}/>
                <SelectRectContainer
                    colorGradient = {this.state.colorGradient} colorBar="dependentBar" num={this.state.num}/>
            </div>

        );
    }
}


export default ColorRectContainer