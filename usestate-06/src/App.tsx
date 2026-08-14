import {OnOff} from "./components/OnOff/OnOff.tsx";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion.tsx";
import {UncontroledRating} from "./components/rating/UncontrolledRating.tsx";


export function App(props: any) {
    console.log("App rendering")
    return (<div>
        <OnOff />
        <OnOff />
        <UncontrolledAccordion titleValue={"Menu"} />
        <UncontrolledAccordion titleValue={"Users"} />
        <UncontroledRating />
        {/*<UncontroledRating />*/}
        {/*<UncontroledRating />*/}
        {/*<UncontroledRating />*/}
        {/*<UncontroledRating />*/}


        {/*<OnOff />*/}
        {/*<OnOff />*/}

    </div>)

}


