import {OnOff} from "./components/OnOff/OnOff.tsx";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion.tsx";
import {UncontroledRating} from "./components/rating/UncontrolledRating.tsx";
import {Rating, type RatingValueType} from "./components/rating/Rating.tsx";
import {Accordion} from "./components/accordion/Accordion.tsx";
import {useState} from "react";


export function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);



    return (<div className={"App"}>
        {/*<OnOff />*/}
        {/*<OnOff />*/}
        <Accordion titleValue={"Users"} collapsed={true}/>
        {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
        {/*<UncontrolledAccordion titleValue={"Users"} />*/}
        {/*<UncontroledRating />*/}
        {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

        {/*<UncontroledRating />*/}
        {/*<UncontroledRating />*/}
        {/*<UncontroledRating />*/}
        {/*<UncontroledRating />*/}


        {/*<OnOff />*/}
        {/*<OnOff />*/}

    </div>)

}


