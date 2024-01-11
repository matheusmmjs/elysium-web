'use client'

import { Suspense, useState } from "react"
import { ScrollArea } from "./ui/scroll-area"
import { Avatar, AvatarFallback } from "./ui/avatar"
import EventSource from 'eventsource';

export interface HistoricProps {
    whatsappNumber: string
}
 
export function Historic({whatsappNumber}: HistoricProps) {
    const [historic, setHistoric] = useState({
        _id: '',
        clientId: '',
        messages: [
        {
            from: '',
            to: '',
            content: '',
            status: '',
            name: '',
            role: '',
            sentDate: '',
            _id: ''
        }],
        __v: 0
    });

    const evtSource = new EventSource(`http://localhost:3000/v1/historic/${whatsappNumber}/sse`);
    evtSource.onmessage = (event: MessageEvent): void => {
        setHistoric(JSON.parse(event.data));
    };

    return (
        <ScrollArea className="h-[400px] w-full pr-4">
            <Suspense fallback={<p>Carregando...</p>}>
                {historic.messages.map((message) => {
                    return (
                        <div key={message._id} className="flex gap-3 text-slate-600 text-sm mb-4">
                            {message.role === 'client' && (
                                <Avatar>
                                    <AvatarFallback>{message.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                            )}
                            {message.role === 'operator' && (
                                <Avatar>
                                    <AvatarFallback>{message.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                            )}
                            {message.role === 'bot' && (
                                <Avatar>
                                    <AvatarFallback>{message.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                            )}
                            <p className="leading-relaxed">
                                <span className="block font-bold text-slate-700">{message.name}</span> 
                                {message.content}
                            </p>
                        </div>
                    )
                })}
            </Suspense>
        </ScrollArea>
    )
}