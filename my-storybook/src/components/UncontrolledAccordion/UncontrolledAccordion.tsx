// import {useReducer, useState} from "react";

import {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer.tsx";

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    // const [collapsed, setCollapsed] = useState(false)

    let [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div>
            {/*<UncontrolledAccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <UncontrolledAccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_CONSTANT})
            }}/>
            {/*<button onClick={ () => {setCollapsed(!collapsed)} }>TOGGLE</button>*/}
            {collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendering")
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>-- {props.title} --</h3>
    )
}

function UncontrolledAccordionBody() {
    console.log("UncontrolledAccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}