import "./style.css";

function Images() {
  return (
    <section>
      <h2>Incorporando Imagem e Vídeo</h2>
      <div class="container">
        {/* <!-- Imagem --> */}
        <div>
          <figure>
            <img
              id="dynamic-image"
              src="https://github.com/renanponick.png?size=200x200"
              alt="Exemplo de imagem"
            />
          </figure>
        </div>
        {/* <!-- Vídeo --> */}
        <div>
          <h3>Vídeo incorporado:</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AF6zpQPthso?si=ewV47cnKM-qAUgR2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>{" "}
        </div>
      </div>
    </section>
  );
}

export default Images;
