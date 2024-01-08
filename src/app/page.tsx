import { Historic } from "@/components/Historic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  async function onSubmit(formData: FormData) {
    'use server'
    
    const content = formData.get("content")
    
    await fetch(
      `https://ca41-2804-431-cfe6-2ab5-a958-5a7f-10cf-4924.ngrok-free.app/v1/actives/messages`, {
      method: "POST",
      body: JSON.stringify({
        to: "5514998336427",
        body: content,
        name: "Matheus Moreira"
      }),
      headers: {
        "Content-Type": "application/json",
      }, 
      next: {
        revalidate: 10
      }
    })

    console.log('teste')
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 p-6 bg-slate-600">
          Sidebar
        </aside>
        <main className="flex flex-1 p-6">
          <Card>
            <CardHeader>
              <CardTitle>Elysium</CardTitle>
              <CardDescription>Chat.</CardDescription>
            </CardHeader>
            <CardContent>
              <Historic whatsappNumber="5514998336427"/>
            </CardContent>
            <CardFooter>
              <form action={onSubmit} className="flex flex-1 space-x-2">
                <Input name="content" placeholder="Digite sua mensagem." required/>
                <Button type="submit" >Enviar</Button>
              </form>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
