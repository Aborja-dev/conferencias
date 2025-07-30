import { useState } from "react"
import type { Talks } from "../../../db/types";
import { ScheduleItem } from "./ScheduleItem";
import type { TalkSchema } from "../../db/type";

export const ScheduleContainer = ({ talks }: { talks: TalkSchema[] }) => {
    const [rowCount, setRowCount] = useState(1)
    return (
        <div>
            {
                Array(rowCount).fill(0).map((_, index) => (
                    <ScheduleItem
                        key={index}
                        talks={talks}
                        hour={talks[0].hour}
                        date={talks[0].date}
                        onSelect={(id) => { console.log(id) }} />
                ))
            }
            <button onClick={() => {
                setRowCount(rowCount + 1)
            }} className="bg-slate-600 text-white px-4 py-2 rounded-xl">
                Añadir conferencia
            </button>
        </div>
    )
}