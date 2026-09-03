import {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";
import {action} from "storybook/actions";
import {OnOff} from "./OnOff";



export default {
    title: "Components/OnOff",
    component: OnOff,
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

export const OnMode = () => <OnOff on={true} onChange={onChangeHandler}/>
export const OffMode = () => <OnOff on={false} onChange={onChangeHandler}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}/>
}
