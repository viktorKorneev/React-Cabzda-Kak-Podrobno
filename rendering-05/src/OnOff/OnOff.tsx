
import {OnOffDiv} from "./OnOffDiv.tsx";

type OnOffPropsType = {
    status: boolean;
    color?: string;
 }

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            {props.status && <OnOffDiv color={}/>}
        </div>
    );
};



