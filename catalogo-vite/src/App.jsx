import { useState, useEffect } from "react"
import ProdutoCard from "./components/ProdutoCard"

function App() {

const [produtos, setProdutos] = useState([])

const [formulario, setFormulario] = useState({
  nome: "",
  preco: "",
  descricao: ""
})

function handleChange(e) {

  setFormulario({
    ...formulario,

    [e.target.name]: e.target.value
  })
}

function handleSubmit(evento) {

  evento.preventDefault()

  const novoProduto = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id +1 : 1,

    nome: formulario.nome,

    preco: formulario.preco,

    descricao: formulario.descricao
  }

  setProdutos([...produtos, novoProduto])

  setFormulario({
    nome: "",
    preco: "",
    descricao: ""
  })
}

const [carregando, setCarregando] = useState(true)

useEffect(() => {

  setTimeout(() => {

    setProdutos([
      {
        id: 1,
        nome: "Notebook Gamer",
        preco: "5000",
        descricao: "Notebook potente para jogos"
      },

      {
        id: 2,
        nome: "iPhone",
        preco: "7000",
        descricao: "Celular da Apple"
      }
    ])

    setCarregando(false)

  }, 2000)

}, [])

  return (
    <main>
      <h1>Meu Catálogo de Produtos</h1>

      <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="nome"
        placeholder="Nome do produto"
        value={formulario.nome}
        onChange={handleChange}
      />

      <input
        type="number"
        name="preco"
        placeholder="Preço"
        value={formulario.preco}
        onChange={handleChange}
      />

      <textarea
        name="descricao"
        placeholder="Descrição"
        value={formulario.descricao}
        onChange={handleChange}
      />

      <button type="submit">
        Adicionar Produto
      </button>

    </form>

      { carregando ? (
          <p>Carregando...</p>
        ) : (
          produtos.map(produto => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao}
            />
          ) ) ) }

    </main>
  )
}

export default App