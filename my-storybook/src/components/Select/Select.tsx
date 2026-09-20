import {useState} from "react";
import s from "./Select.module.css"


type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select({value, onChange, items}: SelectPropsType) {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => setOpen(!open)
    const selectedItem = items.find(i => i.value === value)

    return (
        <div className={s.main}>
            <div className={s.title} onClick={toggleOpen}>
                {selectedItem?.title}
            </div>

            {open && items.map(item => {

                const onChangeHandler = () => {
                    onChange(item.value)
                    setOpen(false)
                }

                return (
                    <div
                        className={s.item}
                        key={item.value}
                        onClick={onChangeHandler}
                    >
                        {item.title}
                    </div>
                )
            })
            }
        </div>
    )
}