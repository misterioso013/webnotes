import { Editor } from "@/components/editor"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
export default function Home() {
  return (
    <div key="1" className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Editor />
      </main>
    </div>
  )
}
