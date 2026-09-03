import {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";
import {Accordion} from "./Accordion";
import {action} from "storybook/actions";


export default {
    title: "Components/Accordion",
    component: Accordion,
}

// --------------------------------------------------
// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// }
// export default meta
// type Story = StoryObj<typeof Accordion>

// export const FirstStory: Story = {
//     args: {
//         titleValue: "hello",
//         collapsed: true,
//         onChange: action("accordion-click"),
//     }
// }
// -----------------------------------------------------
const onChangeHandler = action("onChange")


export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={false}
                      onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={true}
                      onChange={onChangeHandler}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}