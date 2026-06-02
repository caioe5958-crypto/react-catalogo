//----------------------------------Imports-----------------------------------//
import { useState, useContext } from "react"
import TaskContext from "../context/TaskContext"
import TodoItem from "../components/TodoItem"
import TodoForm from "../components/TodoForm"

//---------------------------------------------------------------------------//

function Home() {  

//---------------------------------Const-------------------------------------//
const { tarefas, setTarefas } = useContext(TaskContext)

const [formulario, setFormulario] = useState({

  texto:"",

})

const [filtro, setFiltro] = useState("todas")

const tarefasFiltradas = tarefas.filter(tarefa => {

    if (filtro === "concluidas") {
      return tarefa.concluida
    }

    if (filtro === "pendentes") {
      return !tarefa.concluida
    }

    return true
  })

//---------------------------------------------------------------------------//
function handleChange(e) {

  setFormulario({
    ...formulario,

    [e.target.name]: e.target.value
  })
}
//---------------------------------------------------------------------------//
function handleSubmit(evento) {

  evento.preventDefault()

  const novaTarefa = {
    id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id +1 : 1,

    texto: formulario.texto,

    concluida: false,
  }

  setTarefas([...tarefas, novaTarefa])

  setFormulario({

    texto:"",

  })
}
//---------------------------------------------------------------------------//

function removerItem(id){
  const NovasTarefas = tarefas.filter(
    tarefa => tarefa.id !== id
  )

  setTarefas(NovasTarefas)
}
//---------------------------------------------------------------------------//

function concluirTarefa(id) {
  const tarefasAtualizadas = tarefas.map(tarefa=> {
    if (tarefa.id === id){
      return{
        ...tarefa,
        concluida: !tarefa.concluida
      }
    }
    return tarefa
  })

  setTarefas(tarefasAtualizadas)
}

//---------------------------------------------------------------------------//
  return (
    <main>
      <h1>To-do List</h1>

        <TodoForm
        formulario={formulario}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />

        <div className="filtros">

          <button onClick={() => setFiltro("todas")}>
            Todas
          </button>

          <button onClick={() => setFiltro("concluidas")}>
            Concluídas
          </button>

          <button onClick={() => setFiltro("pendentes")}>
            Pendentes
          </button>

        </div>

        <div className="lista-tarefas">
          {tarefasFiltradas.map(tarefa => (
            <TodoItem
              key={tarefa.id}
              texto={tarefa.texto}
              concluida={tarefa.concluida}
              remover={() => removerItem(tarefa.id)}
              concluir={() => concluirTarefa(tarefa.id)}
            />
          ) ) }
        </div>
    </main>
  )
}
//---------------------------------------------------------------------------//
export default Home