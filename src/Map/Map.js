import React,{Component} from "react";
import * as d3 from "d3";
import emitter from "../event"
class Map  extends Component{
    constructor(props) {
        super(props);

        let colorNumData = {}
        let numData = this.props.numData
        let maxValue = Math.max(...numData)
        numData.forEach((item,index)=> {
            let strItem = item.toString()
            colorNumData[strItem]=this.props.schemeInterpolate(item/maxValue)
        })
        this.state = {
            colorNumData,
            schemeInterpolate:this.props.schemeInterpolate,
            numData: this.props.numData
        }
        this.drawSmall = this.drawSmall.bind(this)
    }
    drawSmall(color){

        let colorNumData = {}
        let numData = this.state.numData
        let maxValue = Math.max(...numData)
        numData.forEach((item,index)=> {
            let strItem = item.toString()
            colorNumData[strItem]=color(item/maxValue)
        })
        // this.state.mapPath.remove()
        this.state.mapPath
            .attr("fill",(item,index)=>{
               return colorNumData[this.props.data[item["properties"]["nom"]]["Porportion of births out-of-wedlock"]]
            })
        // this.setState({mapSvg,mapPath,colorNumData})
    }
    componentDidMount() {
        emitter.addListener('change',async (color)=>{
            // console.log('传出消息')
            // console.log(color(0.25))
            this.drawSmall(color)
        })

        let geoData = this.props.geoData
        let idName = '#'+this.props.idName
        let mapSvg = d3.select(idName)
        // console.log(this.props.data);
        let mapSvgDom = document.getElementById(this.props.idName)
        let width = mapSvgDom.clientWidth;
        let height = mapSvgDom.clientHeight;
        const projection = d3.geoMercator().fitExtent(
            [
                [0, 0],
                [width, height],
            ], geoData);
         console.log(geoData)
        console.log("渲染子地图成功");
        const pathGenerator = d3.geoPath()
            .projection(projection)
        const mapPath = mapSvg.selectAll(".geoPath")
            .data(geoData.features)
            .enter()
            .append("path")
            .attr("d",pathGenerator)
            .attr("stroke-width",0.5)
            .attr("stroke","#000000")
            .attr("fill",(item,index)=>{
                return this.state.colorNumData[this.props.data[item["properties"]["nom"]]["Porportion of births out-of-wedlock"]];
            })
        this.setState({mapSvg,mapPath})
    }
    render() {
        const style1 = {
            margin: 0,
            padding: 0,
        }
        return (
            <svg id={this.props.idName} style={style1}>
            </svg>
        );
    }
}


export default Map