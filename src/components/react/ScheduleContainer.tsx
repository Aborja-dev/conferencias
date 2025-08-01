import { useRef, useState } from "react"
import { ScheduleItem } from "./ScheduleItem";
import type { TalkSchema } from "../../db/type";
const fetchSchedule = async (body: any[]) => {
    try {
        const response = await fetch('/api/schedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
export const ScheduleContainer = ({ talks }: { talks: TalkSchema[] }) => {
    const [rowCount, setRowCount] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null);
    const rows = []
    return (
        <div ref={containerRef}>
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
                if (rowCount + 1 < talks.length) {
                    setRowCount(rowCount + 1)
                }
            }} className="bg-slate-600 text-white px-4 py-2 rounded-xl 
            disabled:bg-slate-400
            disabled:cursor-not-allowed
            "
                disabled={rowCount + 1 === talks.length}
            >
                Añadir conferencia
            </button>
            <button
                className="bg-slate-600 text-white px-4 py-2 rounded-xl"
                onClick={async () => {
                    const container = containerRef.current;
                    const forms = container?.querySelectorAll('form');
                    forms?.forEach((form) => {
                        const formData = new FormData(form);
                        const id = formData.get('talk');
                        const row = talks.find((talk) => talk.id === Number(id));
                        rows.push({
                            id: row?.id,
                            hour: row?.hour,
                            duration: row?.duration
                        });
                    })
                    const result = await fetchSchedule(rows);
                    if (result.data) {
                        console.log('result', result);
                        alert('error al crear el horario');
                    } else {
                        alert('horario creado');
                    }
                }}
            >Verificar</button>
        </div>
    )
}