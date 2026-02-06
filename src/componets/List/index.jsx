import './style.css'

function List({ titulo, exibirPrimeiraLista }) {
    return (
        <section>
            <h2>{ titulo }</h2>
            <div class="container">
                {/* <!-- Lista não ordenada --> */}
                
                { exibirPrimeiraLista ? <>exibir primeira lista</> : null }
                <div>
                    <h3>Lista não ordenada:</h3>
                    <ul id="my-list">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                    <button id="add-item">Adicionar Item</button>
                </div>
                {/* <!-- Lista ordenada --> */}
                <div>
                    <h3>Lista ordenada:</h3>
                    <ol id="my-ordered-list">
                        <li>Primeiro item</li>
                        <li>Segundo item</li>
                        <li>Terceiro item</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default List