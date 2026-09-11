import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "storybook/actions";


export default {
    title: "Components/UncontroledRating",
    component: UncontrolledRating,
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

const callback = action("rating changed inside component");

export const UncontrolledRatingRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback} />
export const UncontrolledRatingRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback} />
export const UncontrolledRatingRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback} />
export const UncontrolledRatingRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback} />
export const UncontrolledRatingRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback} />

