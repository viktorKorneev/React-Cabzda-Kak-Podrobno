import {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";
import {action} from "storybook/actions";
import {Rating, type RatingValueType} from "./Rating";


export default {
    title: "Components/Rating",
    component: Rating,
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

const onClickHandler = action("onClick")

export const EmptyRating = () => <Rating value={0} onClick={onClickHandler}/>
export const Rating1 = () => <Rating value={1} onClick={onClickHandler}/>
export const Rating2 = () => <Rating value={2} onClick={onClickHandler}/>
export const Rating3 = () => <Rating value={3} onClick={onClickHandler}/>
export const Rating4 = () => <Rating value={4} onClick={onClickHandler}/>
export const Rating5 = () => <Rating value={5} onClick={onClickHandler}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}
