import React,{Component} from "react";
import *as d3 from  "d3"
import Map from './Map'
import {OBJExporter} from "three/examples/jsm/exporters/OBJExporter";
import emitter from "../event";


class MapContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {schemeInterpolate:this.props.colorInterpolate}
    }
    drawSmall(){
    }
    async componentDidMount() {
        let mapData = await d3.csv("mapdata.csv")
        let numData = []
        let allMapData = {}
        let colorNumData = {}
        let schemeInterpolate = this.state.schemeInterpolate

        mapData.forEach((item,index)=>{
            numData.push(parseFloat(item["Porportion of births out-of-wedlock"]))
        })



            mapData.forEach((item,index)=>{
            allMapData[item["Year"]] = {}
        })
        mapData.forEach((item,index)=>{
            allMapData[item["Year"]][item["County"]] = item
        })
        // console.log('456')
        // console.log(colorNumData)
        // console.log(mapData);
        // console.log(schemeInterpolate)
        // console.log(schemeInterpolate(0.2))
        // console.log("颜色")

        let mapArray = []
        Object.keys(allMapData).forEach((item,index)=>{
            mapArray.push(<Map/>)
        })
        let geoData = await d3.json("Fr-mainland.geo.json")

        await  this.setState({allMapData,geoData,colorNumData,numData})
    }

    render() {
        let allMapComponent;
        if(this.state.allMapData){
            allMapComponent = Object.keys(this.state.allMapData).map((item,index)=>{return <Map
                                    geoData ={this.state.geoData}
                                    idName={"svg-map"+item}  data={this.state.allMapData[item]}
                                    numData = {this.state.numData}
                                    schemeInterpolate = {this.props.colorInterpolate}/>})
        }else allMapComponent = null;
        console.log(this.state)
        return (
            <div className="div_map_all">
                {allMapComponent}
            </div>
        )
    }
}
export default MapContainer