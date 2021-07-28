import React,{Component} from "react";
import * as d3 from "d3";
import SelectRect from "./SelectRect";
import SelectText from "./SelectText";

class SelectRectContainer  extends Component{
    constructor(props) {
        super(props);
        // console.log('SRC重新渲染')
        // console.log(this.props)
        this.drawRect = this.drawRect.bind(this)
        this.state = {
            colorInterpolate : this.props.colorGradient
        }
    }
    drawRect(){
        // console.log(this.props.colorGradient)
        let classId = '.rect'+ this.props.num;
        d3.selectAll(classId).remove()
        let idName = '#'+this.props.colorBar
        let colorBar = d3.select(idName)
        colorBar.selectAll(classId).data(d3.range(100))
            .join("rect")
            .attr("x",(d,i)=>i*2)
            .attr("y",0)
            .attr("width",2)
            .attr("height",20)
            .attr("class",classId)
            .style('fill',(d,i)=>this.state.colorInterpolate(d/100))
    }
    componentDidMount() {
        this.drawRect()
           }
    render() {
        const style1 = {
            margin: 0,
            padding: 0,
        }
        return (
            <div className="colorBar">
                <SelectRect colorBar={this.props.colorBar}/>
            </div>

        );
    }
}


export default SelectRectContainer