//----------------------------------Imports-----------------------------------//
import { useState, useEffect } from "react"
import ProdutoCard from "../components/ProdutoCard"
import FormProd from "../components/FormProd"

//---------------------------------------------------------------------------//

function Home() {  

//---------------------------------Const-------------------------------------//
const [produtos, setProdutos] = useState([])

const [carregando, setCarregando] = useState(true)

const [formulario, setFormulario] = useState({
  nome: "",
  preco: "",
  descricao: "",
  imagem:""
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

  const novoProduto = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id +1 : 1,

    nome: formulario.nome,

    preco: formulario.preco,

    descricao: formulario.descricao,

    imagem: formulario.imagem
  }

  setProdutos([...produtos, novoProduto])

  setFormulario({
    nome: "",
    preco: "",
    descricao: "",
    imagem:""
  })
}
//---------------------------------------------------------------------------//
useEffect(() => {

  setTimeout(() => {

    setProdutos([
      {
        id: 1,
        nome: "Notebook Gamer",
        preco: "5000",
        descricao: "Notebook potente para jogos",
        imagem:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0YWRvciUyMHBvcnQlQzMlQTF0aWx8ZW58MHx8MHx8fDA%3D"
      },

      {
        id: 2,
        nome: "iPhone",
        preco: "7000",
        descricao: "Celular da Apple",
        imagem:"https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
      }
    ])

    setCarregando(false)

  }, 2000)

}, [])
//---------------------------------------------------------------------------//
  return (
    <main>
      <h1>Meu Catálogo de Produtos</h1>

        <FormProd
        formulario={formulario}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
      
      { carregando ? (
          <p>Carregando...</p>
        ) : (
        
        <div className="lista-produtos">
          {produtos.map(produto => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao}
              imagem={produto.imagem}
            />
          ) ) }
        </div>
        )
    }
    </main>
  )
}
//---------------------------------------------------------------------------//
export default Home