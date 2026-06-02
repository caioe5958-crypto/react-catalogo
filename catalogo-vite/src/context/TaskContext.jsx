import { createContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const TaskContext = createContext()

export function TaskProvider({ children }) {

  const [tarefas, setTarefas] =
  useLocalStorage("tarefas", [])

  return (
    <TaskContext.Provider value={{tarefas, setTarefas}}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext