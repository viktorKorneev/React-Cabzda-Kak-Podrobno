
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue}/>
            {props.collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    title: string
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendering")
    return (
        <h3>-- {props.title} --</h3>
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