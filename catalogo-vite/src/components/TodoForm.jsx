function TodoForm ({
    formulario,
    handleChange,
    handleSubmit,})
    {
        return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="texto"
        placeholder="Digite uma tarefa"
        value={formulario.texto}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Adicionar
      </button>

    </form>
        )
    }

export default TodoForm
    