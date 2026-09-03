
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    // onClick: (value: boolean) => void
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    return (
        <div>
            {/*<AccordionTitle onClick={props.onClick} collapsed={props.collapsed} title={props.titleValue} />*/}
            <AccordionTitle onChange={props.onChange} title={props.titleValue} />
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}



type AccordionTitlePropsType = {
    title: string
    // onClick: (value: boolean) => void
    // collapsed: boolean
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendering")
    return (
        // <h3 onClick={() => props.onClick(!props.collapsed)}>-- {props.title} --</h3>
        <h3 onClick={() => props.onChange()}>-- {props.title} --</h3>
    )
}



function AccordionBody() {
    console.log("UncontrolledAccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}