function ProdutoCard(props) {
  return (
    <div>
      <h2>{props.nome}</h2>

      <p>{props.descricao}</p>

      <strong>R$ {props.preco}</strong>
    </div>
  )
}

export default ProdutoCard