import {type ClockViewProosType} from "./Clock.tsx";

export const get2digitsString = (num: number) => num < 10 ? '0' + num : num


export const DigitalClockView = ({date}:ClockViewProosType) => {
    return <>
        <> <span> {get2digitsString(date.getHours())} </span>
            : <span> {get2digitsString(date.getMinutes())} </span>
            : <span> {get2digitsString(date.getSeconds())}</span>
        </>
    </>
}
