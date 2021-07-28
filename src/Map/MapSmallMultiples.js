import React,{Component} from "react";
import ColorRectContainer from "./ColorRect/ColorRectContainer";
import MapContainer from "./MapCountainer";
import * as d3 from "d3";
import emitter from "../event";
import './MapSmallMultiples.less'

class MapSmallMultiples extends Component{
    constructor(props) {
        super(props);
        let colorAll = [
            d3.interpolatePurples,
            d3.interpolateBuPu,d3.interpolateGreens,
            d3.interpolateOranges,
            d3.interpolateCividis,
            d3.interpolateRdBu,
            d3.interpolateWarm,
            d3.interpolateCool,
            d3.interpolateCubehelixDefault,
            d3.interpolateGnBu,
            d3.interpolateRainbow
        ]
        let num=0;
        this.drawRect = this.drawRect.bind(this)
        this.colorChange = this.colorChange.bind(this)
        this.state = {
            colorGradient:colorAll[num],
            colorAll,num
        }
    }
    async colorChange({key}){
        emitter.emit("change", this.state.colorAll[key])
        await this.setState({colorGradient:this.state.colorAll[key],num:key})
        await  this.drawRect()
    }
    drawRect(){
        let classId = '.rect'+ this.state.num;
        d3.selectAll(classId).remove()
        let idName = '#'+"dependentBar"
        let colorBar = d3.select(idName)
        colorBar.selectAll(classId).data(d3.range(100))
            .join("rect")
            .attr("x",(d,i)=>i*2)
            .attr("y",0)
            .attr("width",2)
            .attr("height",20)
            .attr("class",classId)
            .style('fill',(d,i)=>this.state.colorGradient(d/100))
    }
    componentDidMount() {
    }
    render() {
        return(
            <div className="div_small_layout">
                <MapContainer colorInterpolate = {this.state.colorGradient}/>
                <ColorRectContainer
                    colorGradient = {this.state.colorGradient}
                    colorAll = {this.state.colorAll}
                    colorBar="dependentBar"
                    num={this.state.num}
                    colorChange = {this.colorChange}
                />
            </div>
        )
    }
}

export default MapSmallMultiples