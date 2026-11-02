import {Clock} from "./Clock.tsx";

export default {
    title: "Clock",
    component: Clock,
}

export const BaseExample = () => {
    return <>
        <Clock mode={"digital"}/>
        <Clock mode={"analog"}/>
    </>

}