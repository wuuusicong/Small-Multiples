import React,{Component} from "react"
import *as d3 from  "d3"

class LineMatrix extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const lineSvgDom = document.getElementById(this.props.id)
        const width = lineSvgDom.clientWidth;
        const height = lineSvgDom.clientHeight;
        let tmpData = this.props.data
        console.log("tmpData/\n",tmpData)
        let min = d3.min(tmpData["data"]["data"])
        let max = d3.max(tmpData["data"]["data"])
        tmpData["data"]["data"]= tmpData["data"]["data"].map((item,index)=>{
            return item/max
        })

        let xScale = d3.scaleLinear()
            .domain([2013,2016])
            .range([20,width])


        let min2 = d3.min(tmpData["data"]["data"])
        let max2 = d3.max(tmpData["data"]["data"])
        console.log('min\n',min)
        console.log('max\n',max)
        let yScale = d3.scaleLinear()
            .domain([min2,max2])
            .range([height,20])
        let data = []
        tmpData["data"]["year"].forEach((item,index)=>{

            data.push([item,tmpData["data"]["data"][index]])
        })
        console.log(data)
        let id = "#"+this.props.id
        let lineSvg = d3.select(id)
        let linePath = d3.line()
            .x((d)=>{
                // console.log("x\n",tmpData["xScale"](d[0]))
                return xScale(d[0])})
            .y((d)=>{
                console.log(d[1])
                console.log(yScale(d[1]))
                return yScale(d[1])})
        lineSvg.append("path")
            .attr("class","line-path")
            // .attr('transform', 'translate(' + 0 + ',' + 0+ ')')
            .attr('d',linePath(data))
            .attr("fill",'none')
            .attr('stroke-width', 1)
            .attr('stroke', 'green');
    }
    render() {
        return (
            <svg id={this.props.id} className="svg_LineMatrix"/>
        )
    }
}

export default LineMatrix