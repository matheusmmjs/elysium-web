import { Suspense } from "react"
import { ScrollArea } from "./ui/scroll-area"
import { Avatar, AvatarFallback } from "./ui/avatar"

export interface HistoricProps {
    whatsappNumber: string
}

interface Historic {
    _id: string,
    clientId: string,
    messages: [
    {
      from: string,
      to: string,
      content: string,
      status: string,
      name: string,
      role: string,
      sentDate: string,
      _id: string
    }],
    __v: number
}
 
export async function Historic({whatsappNumber}: HistoricProps) {
    const response = await fetch(
        `https://ca41-2804-431-cfe6-2ab5-a958-5a7f-10cf-4924.ngrok-free.app/v1/historic/${whatsappNumber}`, {
            next: {
                revalidate: 10
            }
        })
    const historic: Historic = await response.json()
    return (
        <ScrollArea className="h-[400px] w-full pr-4">
            <Suspense fallback={<p>Carregando...</p>}>
                {historic.messages.map(message => {
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