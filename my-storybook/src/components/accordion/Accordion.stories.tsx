import {useState} from "react";
// import type {Meta, StoryObj} from "@storybook/react-vite";
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
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")


export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={false}
                      onChange={callback}
                      items={[]}
                      onClick={onClickCallback}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={true}
                      onChange={callback}
                      items={[{title: "Dimych", value: 1},
                          {title: "Artem", value: 2},
                          {title: "Viktor", value: 3},
                          {title: "Valera", value: 4}]}
                      onClick={onClickCallback}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={[{title: "Dimych", value: 1},
                          {title: "Artem", value: 2},
                          {title: "Viktor", value: 3},
                          {title: "Valera", value: 4}]}
                      onClick={(value) => { alert(`user with ID ${value} should be happy`)}}/>
}