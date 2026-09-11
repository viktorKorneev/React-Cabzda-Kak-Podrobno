import {useState} from "react";

export default {
    title: 'input',
    // component: "OnOff",
}

export const UncontolledInput = () => <input/>
export const TrackValueOfUncontolledInput = () => {
    const [value, setValue] = useState("")

    return <><input onChange={(event) => {
       const actualValue = event.currentTarget.value
        setValue(actualValue)
    }}/> - {value}</>
}


export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>

