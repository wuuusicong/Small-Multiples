import React from "react"
import {Dropdown, Menu} from "antd";
import {DownOutlined} from "@ant-design/icons";
import SelectRect from "./SelectRect";
import *as d3 from "d3"
import SelectRectContainer from "./SelectRectContainer";
function SelectText({colorAll,colorChange}) {
    let colorId = colorAll.map((item,index)=>"color"+index)
    let menuColor = colorId.map((item,index)=>
        <Menu.Item key={index}> <SelectRectContainer colorGradient = {colorAll[index]}colorBar={item}></SelectRectContainer></Menu.Item>
    )
    const menu = (
        <Menu className="Menu_bar" onClick={colorChange}>
            {menuColor}
        </Menu>
    )
    return(
        <div className="div_menu">
            <Dropdown overlay={menu} className="Dropdown_menu_bar" overlayClassName="menu_child">
                <p className="ant-dropdown-link " onClick={e => e.preventDefault()}>
                    Color Picker <DownOutlined />
                </p>
            </Dropdown>
        </div>

    )

}
export  default SelectText