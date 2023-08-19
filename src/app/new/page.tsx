import Link from "next/link"
import { prisma } from "@/db"
import { redirect } from "next/navigation"

async function createTodo(data: FormData) {
    "use server"
    const title = data.get('title')?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Code")
    }
    await prisma.todo.create({ data: { title, complete: false } })

    redirect("/")
}

const page = () => {
    return (
        <>
            <header className="flex justify-between mb-4 items-center">
                <h1 className="text-2xl">
                    TODOS
                </h1>
            </header>
            <form className="flex gap-2 flex-col" action={createTodo}>
                <input type="text" name="title" className="border rounded-lg p-2 m-4 text-slate-400 border-gray-400 focus-within:bg-slate-700 hover:bg-slate-700 shadow-lg outline-none lg:w-2/5 w-5/6" />
                <div>
                    <Link href=".." className="border rounded-lg p-2 m-4 text-slate-400 border-gray-400 focus-within:bg-slate-700 hover:bg-slate-700 shadow-lg outline-none">Cancel</Link>
                    <button type="submit" className="border rounded-lg p-2 m-4 text-slate-400 border-gray-400 focus-within:bg-slate-700 hover:bg-slate-700 shadow-lg outline-none">
                        ADD
                    </button>
                </div>
            </form>
        </>
    )
}

export default page