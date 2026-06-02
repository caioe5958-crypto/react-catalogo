import React from "react"

function TodoItem(props) {

  return (

    <div className="card">

      <h2 className={props.concluida ? "concluida" : ""}>{props.texto}</h2>

      <p className={props.concluida ? "status-concluida" : "status-pendente"}><strong>{props.concluida ? "Concluída!" : "Pendente"}</strong></p>

      <button onClick={props.remover}>Remover</button>

      <button onClick={props.concluir}>Concluir</button>

    </div>
  )
}

export default React.memo(TodoItem)