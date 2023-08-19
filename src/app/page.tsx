import { prisma } from "@/db"
import Link from "next/link"
import Todoitem from "./components/Todoitem"

const getTodos = () => {
  return prisma.todo.findMany()
}
async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({ where: { id }, data: { complete } })
}

const page = async () => {
  const todos = await getTodos()
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">
          TODOS
        </h1>
        <Link href="/new" className="border rounded-lg p-2 m-4 text-slate-400 border-gray-400 focus-within:bg-slate-700 hover:bg-slate-700 shadow-lg outline-none" >
          NEW
        </Link>
      </header>
      <ul className="pl-4 text-xl font-sans">
        {todos.map(todo => (
          <Todoitem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}

export default page