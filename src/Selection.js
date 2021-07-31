import React, {useContext} from "react";
import {Radio} from "antd";

const Selection = ({localContext,AllType}) => {
    console.log(233)
    console.log(localContext);
    const { target, setTarget } = useContext(localContext)

    const onChangeEvent = e => {
        console.log(44)
        console.log(e.target.value)
        setTarget(e.target.value)
    }
    // console.log(target);
    console.log("Selection 重新刷新");
    return (<Radio.Group
        defaultValue={target} buttonStyle="solid" size="large" onChange={onChangeEvent}>
        {AllType.map((item,index)=><Radio.Button value={item}>{item}</Radio.Button>)}
    </Radio.Group>)
}
export default Selection;
