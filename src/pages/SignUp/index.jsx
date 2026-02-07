import { Input } from "../../componets/Input";
import { Button } from "../../componets/Button";
import "./style.css";

export function SignUp() {
  return (
    <div className="page signup">
      <div className="signup-container">
        <header className="signup-header">
          <h2>Criar conta</h2>
          <p>Preencha os dados abaixo para se cadastrar</p>
        </header>

        <form className="signup-form">
          <Input
            label="Nome"
            name="nome"
            placeholder="Seu nome completo"
          />

          <Input
            label="E-mail"
            type="email"
            name="email"
            placeholder="seu@email.com"
          />

          <Input
            label="Senha"
            type="password"
            name="senha"
            placeholder="Crie uma senha segura"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}