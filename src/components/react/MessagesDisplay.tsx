import React from 'react'
import type { IMessage } from '../../db/type';
interface Messsage {
    name: string,
    date: string,
    message: string
}

export const postMessage = async (body: IMessage) => {
    const result = await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify(body)
    });
    return result
}


export const MessagesDisplay = ({
    messagesInitial = [],
    id
}: {
    messagesInitial: Messsage[],
    id: number
}) => {
    const [messages, setMessages] = React.useState<Messsage[]>(messagesInitial);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        
        const data = new FormData(e.currentTarget);
        const object = Object.fromEntries(data);
        const message = object.message as string;
        const body = {
            message: message.trim(),
            userId: 1,
            talkId: id
        }
        postMessage(body).then((res) => res.json()).then((data) => {
            console.log(data.response, "llego al sevice  ");
            
            setMessages(data.response)
        })
    }
  return (
    <React.Fragment>
         <div className="relative">
        <form onSubmit={submitHandler}>
            <textarea
            className="bg-slate-300 border border-white w-full rounded-2xl mt-4 py-2 px-4 " 
            name="message" id="" rows={5}>
        </textarea>
        <button className="bg-slate-600 text-white px-4 py-2 rounded-xl absolute bottom-4 right-4">
            Submit
        </button>
        </form>
    </div>
    <div className="flex flex-col gap-4">
    {
        messages.map((message) => (
            <div className="text-white flex flex-col py-4 px-2 gap-4 bg-slate-600 rounded">
                <div className="flex justify-between">
                <p className="font-bold">
                    {message.name}
                </p>
                <p>
                    {message.date}
                </p>
                </div>
                <p >
                    {message.message}
                </p>
            </div>
        ))
    }
    </div>
    </React.Fragment>
  )
}
