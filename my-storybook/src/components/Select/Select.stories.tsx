import {Select} from "./Select.tsx";
import {useState} from "react";

export default {
    title: "Components/Select",
    component: Select,
}

export const SelectDemo = () => {
    const [value, setValue] = useState(1)

    return (
        <Select
            value={value}
            onChange={setValue}
            items={[
                { title: "Dimych", value: 1 },
                { title: "Artem", value: 2 },
                { title: "Viktor", value: 3 },
                { title: "Valera", value: 4 }
            ]}
        />
    )
}
