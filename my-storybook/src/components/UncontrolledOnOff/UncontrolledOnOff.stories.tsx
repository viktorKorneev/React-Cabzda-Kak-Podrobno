import {useState} from "react";
// import type {Meta, StoryObj} from "@storybook/react-vite";
import {action} from "storybook/actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";



export default {
    title: "Components/UncontrolledOnOff",
    component: UncontrolledOnOff,
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

export const UncontrolledOnOffOnMode = () => <UncontrolledOnOff onChange={onChangeHandler}/>
export const UncontrolledOnOffOffMode = () => <UncontrolledOnOff onChange={onChangeHandler}/>

export const UncontrolledOnOffModeChanging = () => {
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <>
            <UncontrolledOnOff onChange={setSwitchOn}/>
            {switchOn.toString()}
        </>

    )
}
