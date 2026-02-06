import './style.css'

function Images() {
    return (
        <section>
            <h2>Incorporando Imagem e Vídeo</h2>
            <div class="container">
                {/* <!-- Imagem --> */}
                <div>
                    <figure>
                        <img id="dynamic-image" src="https://via.placeholder.com/600x400" alt="Exemplo de imagem" />
                        <figcaption>Legenda da imagem</figcaption>
                        <button id="change-image">Mudar Imagem</button>
                    </figure>
                </div>
                {/* <!-- Vídeo --> */}
                <div>
                    <h3>Vídeo incorporado:</h3>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Images