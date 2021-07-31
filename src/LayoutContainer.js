import React,{Component} from "react";
import Layout from "./Layout";
import *as P from "popojs";
import echartsGL from 'echarts-gl'
import *as echarts from "echarts"
import *as d3 from  "d3"
import {message} from "antd";
import *as axios from "axios"


class LayoutContainer extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("didi")
        console.log(this.state);
        const layout = P.init({
            container:'container',
            rows:12,
            cols:24,
            layout: [
                // [24,[[8,[2,11,11]],[16]]],
                [1],[11,[2,22]]
            ],
            dev:{
                enable:true,
                panel:{
                    enable: true,
                    background:'#ccc'
                },
                guideline:{
                    // show: true
                }
            },
            panel: {
                enable: true,
                custom: [
                    {panels: [1]}
                ]
            },
        });
    }


    render() {
        return <Layout />
    }
}
export default LayoutContainer
