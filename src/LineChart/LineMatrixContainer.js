import React,{Component} from "react"
import  *as d3 from "d3"
import LineMatrix from "./LineMatrix";
import Map from "../Map/Map";
import "./LineMatrix.less"
class  LineMatrixContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentDidMount() {

        let data = await d3.csv("LineData.csv");
        let data2 = {}
        data.forEach((item,index)=>{
            data2[item["Park"]] = {}
            data2[item["Park"]]["year"] = []
            data2[item["Park"]]["data"] = []
        })
        data.forEach((item,index)=>{
            let year = parseInt(item["Year"])
            if (year<2013)return
            data2[item["Park"]]["year"].push(parseInt(item["Year"]))
            data2[item["Park"]]["name"] = item["Park"]
            data2[item["Park"]]["data"].push(parseInt(item["Recreation Visitors"]))
        })












        let lineSvgGraph = []
        let maxValueArray = []
        Object.keys(data2).forEach((item,index)=>{
            if(data2[item]["year"].length<4||data2[item]["year"].length>4){
                delete data2[item]
                return
            }
            let tmp = data2[item]
            maxValueArray.push(...tmp["data"])
        })
        let maxValue = d3.max(maxValueArray)
        let minValue = d3.min(maxValueArray)
        console.log(maxValue)
        console.log(data)
        console.log("LineData")
        console.log(data2)





        let lineMatrixSum = 0

        Object.keys(data2).forEach((item,index)=>{
            if(lineMatrixSum>=30)return
            lineMatrixSum++;
            let tmp = data2[item]
            let tmpData = {data:tmp,maxValue}
            lineSvgGraph.push(<LineMatrix key={index} id={"lineSvg"+index} data={tmpData}/>)
        })








        this.setState({lineSvgGraph})



    }

    render() {
        if(this.state.lineSvgGraph){
            console.log("444")
        }
        return(
            <div className="div_LineMatrix">
                {this.state.lineSvgGraph}
            </div>
        )
    }

}

export default LineMatrixContainer