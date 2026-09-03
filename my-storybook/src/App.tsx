import {OnOff} from "./components/OnOff/OnOff.tsx";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {UncontroledRating} from "./components/UncontrolledRating/UncontrolledRating.tsx";
import {Rating, type RatingValueType} from "./components/rating/Rating.tsx";
import {Accordion} from "./components/accordion/Accordion.tsx";
import {useState} from "react";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff.tsx";


export function App(props: any) {
  console.log("App rendering")

  // let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
  let [accordioncollapsed, setAccordionCollapsed] = useState<boolean>(false)
  // let [on, setOn] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)


  return (<div className={"App"}>
    {/*<OnOff onClick={setOn} value={on}/>*/}
    {/*<OnOff on={switchOn} onChange={ setSwitchOn }/>*/}
    {/*<OnOff />*/}
    {/*<Accordion titleValue={"Users"} collapsed={accordioncollapsed} onClick={setAccordionCollapsed}/>*/}
    <Accordion titleValue={"Users"} collapsed={accordioncollapsed} onChange={() => {setAccordionCollapsed(!accordioncollapsed)}}/>
    {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
    <UncontrolledAccordion titleValue={"Users"} />
    {/*<UncontroledRating />*/}
    {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

    <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}


    {/*<UncontroledRating />*/}
    {/*<UncontroledRating />*/}
    {/*<UncontroledRating />*/}
    {/*<UncontroledRating />*/}


    {/*<OnOff />*/}
    {/*<OnOff />*/}

  </div>)

}


