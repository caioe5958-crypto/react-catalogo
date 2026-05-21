function FormProd ({
    formulario,
    handleChange,
    handleSubmit,})
    {
        return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="nome"
        placeholder="Nome do produto"
        value={formulario.nome}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="preco"
        placeholder="Preço"
        value={formulario.preco}
        onChange={handleChange}
        required
      />

      <textarea
      type="text"
        name="descricao"
        placeholder="Descrição"
        value={formulario.descricao}
        onChange={handleChange}
        required
      />

        <input
        type="text"
        name="imagem"
        placeholder="URL da imagem"
        value={formulario.imagem}
        onChange={handleChange}
        required
        />

      <button type="submit">
        Adicionar Produto
      </button>

    </form>
        )
    }

export default FormProd
    