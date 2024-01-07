import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[600px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Elysium</CardTitle>
          <CardDescription>Contact Center.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>MA</AvatarFallback>
              <AvatarImage src="https://github.com/matheusmmjs.png"/>
            </Avatar>
            <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">Cliente:</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum, quas magnam, magni ducimus ea architecto aliquam odio atque, voluptate porro maiores corporis minus earum et fuga accusantium consequatur. Molestiae.
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>OP</AvatarFallback>
              <AvatarImage src="https://github.com/rocketseat.png"/>
            </Avatar>
            <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">Operador:</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum, quas magnam, magni ducimus ea architecto aliquam odio atque, voluptate porro maiores corporis minus earum et fuga accusantium consequatur. Molestiae.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="Digite sua mensagem."/>
          <Button type="submit">Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
