import {OnOff} from "./components/OnOff/OnOff.tsx";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion.tsx";
import {UncontroledRating} from "./components/rating/UncontrolledRating.tsx";
import {Rating} from "./components/rating/Rating.tsx";
import {Accordion} from "./components/accordion/Accordion.tsx";


export function App(props: any) {
    console.log("App rendering")
    return (<div className={"App"}>
        <OnOff />
        {/*<OnOff />*/}
        <Accordion titleValue={"Users"} collapsed={true}/>
        <UncontrolledAccordion titleValue={"Menu"} />
        {/*<UncontrolledAccordion titleValue={"Users"} />*/}
        <UncontroledRating />
        <Rating value={5} />

        {/*<UncontroledRating />*/}
        {/*<UncontroledRating />*/}
        {/*<UncontroledRating />*/}
        {/*<UncontroledRating />*/}


        {/*<OnOff />*/}
        {/*<OnOff />*/}

    </div>)

}


