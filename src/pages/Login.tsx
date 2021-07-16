import Link from "next/link";
import React from "react";
import { Box, ColumMain, LoginGrid } from "../components";
import { Logo } from "../styles/Login";

export default function Login() {
  const [slug, setSlug] = React.useState("");
  return (
    <>
      <LoginGrid>
        <ColumMain className="panel">
          <Box>
            <Logo>AluraKut</Logo>
            <p>
              Conecte-se aos seus amigos e familiares usando recados e mensagens
              instantâneas
            </p>
            <p>
              Conheça novas pessoas através de amigos de seus amigos e
              comunidades
            </p>
            <p>Compartilhe seus vídeos, fotos e paixões em um só lugar</p>
          </Box>
        </ColumMain>
        <ColumMain className="formLogin">
          <Box>
            <p>Acesse o alurakut.br</p>
            <p> com a sua conta</p>

            <input
              placeholder="Usuário"
              name="usuario"
              aria-label="Usuário"
              type="text"
              onChange={(event) => setSlug(event.target.value)}
              value={slug}
            />
            <Link href={slug ? `/profile/${slug}` : "/"}>
              <button type="submit">Login</button>
            </Link>
          </Box>
          <Box>NovoUsuario</Box>
        </ColumMain>
        <ColumMain className="footerLogin">
          <Box>
            © 2020 Orkut.br - Sobre o Orkut.br - Centro de segurança -
            Privacidade - Termos - Contato
          </Box>
        </ColumMain>
      </LoginGrid>
    </>
  );
}
