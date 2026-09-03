// import {useState} from "react";
// import type {Meta, StoryObj} from "@storybook/react-vite";
import {UncontrolledAccordion} from "./UncontrolledAccordion";
// import {action} from "storybook/actions";


export default {
    title: "Components/UncontrolledAccordion",
    component: UncontrolledAccordion,
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



export const UncontrolledAccordionCollapsedAccordion = () => {
    return <UncontrolledAccordion titleValue={"Users"} />
}

