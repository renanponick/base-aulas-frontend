import { Input } from "../../componets/Input";
import { Button } from "../../componets/Button";
import "./style.css";
import { useState } from "react";

export function SignUp() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Dados de cadastro:", form);
  }

  return (
    <div className="page signup">
      <div className="signup-container">
        <header className="signup-header">
          <h2>Criar conta</h2>
          <p>Preencha os dados abaixo para se cadastrar</p>
        </header>

        <form className="signup-form" onSubmit={handleSubmit}>
          <Input
            label="Nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
          />

          <Input
            label="E-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
          />

          <Input
            label="Senha"
            name="senha"
            type="password"
            value={form.senha}
            onChange={handleChange}
            placeholder="Digite sua senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
