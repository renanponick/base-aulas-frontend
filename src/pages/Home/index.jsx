export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <h2>Bem-vindo 👋</h2>
        <p>
          Esta é a página inicial da aplicação. Aqui você apresenta a proposta
          principal, orienta o usuário e cria contexto.
        </p>
      </section>

      <section className="features">
        <div className="card">
          <h3>Estrutura</h3>
          <p>
            Código organizado, componentes reutilizáveis e layout consistente.
          </p>
        </div>
        <div className="card">
          <h3>Escalável</h3>
          <p>Pensado para crescer sem virar um emaranhado de CSS e JSX.</p>
        </div>
        <div className="card">
          <h3>Didático</h3>
          <p>Ideal para aprender React com boas práticas desde o início.</p>
        </div>
      </section>
    </div>
  );
}
