import { action } from '@storybook/addon-actions'
import {Accordion} from "./Accordion";
import {useState} from "react";

export default {
    component: Accordion,
}

const onChangeHandler = action("onChange");


export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={false}
                      onChange={{onChangeHandler}}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={true}
                      onChange={() => {}}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}