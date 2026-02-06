import './style.css'

function Form() {
    return (
        <section class="last">
            <h2>Formulário Simples</h2>
            <form id="simple-form">
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="4" cols="50"></textarea>
                </div>
                <div>
                    <label for="idade">Idade:</label>
                    <input type="number" id="idade" name="idade" min="18" max="100" />
                </div>
                <div>
                    <label for="cor">Cor favorita:</label>
                    <input type="color" id="cor" name="cor" />
                </div>
                <div>
                    <label for="anexo">Anexo:</label>
                    <input type="file" id="anexo" name="anexo" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Form