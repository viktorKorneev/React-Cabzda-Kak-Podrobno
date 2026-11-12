import {useEffect, useState} from "react";
import style from './Clock.module.css'
import {DigitalClockView} from "./DigitalClockView.tsx";
import {AnalogClockView} from "./AnalogClockView.tsx";

type PropsType = {
    mode?: "digital" | "analog"
}


// export const Clock = (props: PropsType) => {
//     const [date, setDate] = useState(new Date())
//
//     useEffect(() => {
//
//         const intervalID = setInterval(() => {
//             console.log("TICK")
//             setDate(new Date())
//         }, 1000)
//
//         return () => {
//             clearInterval(intervalID)
//         }
//     }, [])
//
//     if (props.mode === "digital") {
//         // const secondsString = get2digitsString(date.getSeconds())
//         // const minutesString = get2digitsString(date.getMinutes())
//         // const hoursString = get2digitsString(date.getHours())
//         return (
//             <div>
//                 <span>{get2digitsString(date.getHours())}</span>
//                 :
//                 <span>{get2digitsString(date.getMinutes())}</span>
//                 :
//                 <span>{get2digitsString(date.getSeconds())}</span>
//             </div>
//         )
//     }
//
//     // Получаем часы, минуты и секунды
//     const seconds = date.getSeconds()
//     const minutes = date.getMinutes()
//     const hours = date.getHours() % 12
//
//     // Рассчитываем углы поворота стрелок
//     const secondAngle = seconds * 6
//     const minuteAngle = minutes * 6 + seconds * 0.1
//     const hourAngle = hours * 30 + minutes * 0.5
//
//
//     return (
//         <div className={style.clock}>
//             <div
//                 className={`${style.hand} ${style.hour}`}
//                 style={{transform: `rotate(${hourAngle}deg)`}}
//             />
//             <div
//                 className={`${style.hand} ${style.minute}`}
//                 style={{transform: `rotate(${minuteAngle}deg)`}}
//             />
//             <div
//                 className={`${style.hand} ${style.second}`}
//                 style={{transform: `rotate(${secondAngle}deg)`}}
//             />
//             <div className={style.center}/>
//         </div>
//     )
//
// }

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("TICK")
            setDate(new Date())
        }, 1000)

        return () => {
             clearInterval(intervalID)
        }
    }, []);

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView  date={date} />
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date} />
    }

    return (
        <div>
            {view}
        </div>
    )
}

export type ClockViewProosType = {
    date: Date,
}


