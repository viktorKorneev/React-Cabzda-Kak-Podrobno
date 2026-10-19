import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample");

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString()
    });

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString()
    }, []);

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString()
    }, [counter]);

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}


export const SimpleTimeoutExample = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            Hello, time: {time.toLocaleTimeString()}
        </>
    );
};
