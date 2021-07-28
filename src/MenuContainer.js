import React,{Component} from "react";
import {Menu,Dropdown} from "antd";
import {DownOutlined}from "@ant-design/icons"

class MenuContainer extends Component{
    constructor(props) {
        super(props);
        const menu = (
            <Menu>
                <Menu.Item>
                    <p>Maps</p>
                </Menu.Item>
                <Menu.Item>
                    <p>LineChart</p>
                </Menu.Item>
                <Menu.Item>
                    <p>Scatter Plot</p>
                </Menu.Item>
                <Menu.Item>
                    <p>Plot1</p>
                </Menu.Item>
                <Menu.Item>
                    <p>Plot2</p>
                </Menu.Item>
                <Menu.Item>
                    <p>Plot3</p>
                </Menu.Item>
            </Menu>
        )
        this.state={menu}
    }
    componentDidMount() {
    }

    render() {
        return(
            <div className="div_menu">
                <Dropdown overlay={this.state.menu} className="Dropdown_menu">
                    <p className="ant-dropdown-link p_menu_label" onClick={e => e.preventDefault()}>
                        Choose Small Multiples <DownOutlined />
                    </p>
                </Dropdown>
            </div>

        )

    }
}
export default MenuContainer