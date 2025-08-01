import { useId, useState } from "react";
import type { TalkSchema } from "../../db/type";
export const ScheduleItem = ({ talks, hour, date, onSelect }: { 
    talks: TalkSchema[]
    hour: number
    date: number,
    onSelect: (id: number) => void
}) => {
    const [currentTalk, setCurrentTalk] = useState({
        talks: {},
        hour,
        date    
    });
    const id = useId();
    const changeHandler = (e: any) => {
        const result = talks.find((talk) => talk.id === Number(e.target.value));
        if (!result) return
        setCurrentTalk({
            talks: result,
            hour: result.hour,
            date: result.date
        });
        onSelect(Number(e.target.value));
    }
    
    return (
    <form  className="flex gap-4">
        <select name="talk" onChange={changeHandler}>
            {
                talks.map((talk) => (
                    <option value={talk.id}>{talk.name}</option>
                ))
            }
        </select>
        <input  type="text" readOnly value={new Date(currentTalk.date).toLocaleDateString()} name="date" />
        <input  type="text" readOnly value={new Date(currentTalk.hour).toLocaleTimeString()} name="hour" />
    </form>
    )
}