"use client"
interface Props {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}

const Todoitem = ({ id, title, complete, toggleTodo }: Props) => {
    const handleCheck = (e: React.FormEvent<HTMLInputElement>) => {
        toggleTodo(id, e.currentTarget.checked)
    }
    return (
        <li className="flex gap-1 items-center">
            <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={handleCheck} />
            <label htmlFor={id} className=" cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        </li>
    )
}

export default Todoitem