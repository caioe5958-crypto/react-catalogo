function ProdutoCard(props) {
  return (
    <div className="card">
      <img src={props.imagem} alt={props.nome} />

      <h2>{props.nome}</h2>

      <p>{props.descricao}</p>

      <strong>R$ {props.preco}</strong>
    </div>
  )
}

export default ProdutoCard