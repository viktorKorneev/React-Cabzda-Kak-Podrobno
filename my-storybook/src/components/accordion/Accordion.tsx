
type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    // onClick: (value: boolean) => void
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    return (
        <div>
            {/*<AccordionTitle onClick={props.onClick} collapsed={props.collapsed} title={props.titleValue} />*/}
            <AccordionTitle onChange={props.onChange} title={props.titleValue} />
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("UncontrolledAccordionBody rendering")
    return <ul>
        {props.items.map((i, index) => <li onClick={ () => { props.onClick(i.value) } } key={index}>{i.title}</li>)}
    </ul>
}