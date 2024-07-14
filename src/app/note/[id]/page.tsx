import { Editor } from "@/components/editor"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
type props = {
    id: number | string
}
export default function Page({ params }: { params: props }) {


    return (
        <div key="1" className="flex flex-col h-screen">
            <Header />
            <main className="flex flex-1 overflow-hidden">
                <Sidebar />
                <Editor id={params.id} />
            </main>
        </div>
    )
}