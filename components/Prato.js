
export default function Prato ({nome, descricao, preco}) {
    return (
        <article>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>R$ {preco.toFixed(2)}</p>
            <button>Adicionar ao pedido</button>
        </article>
    );
}