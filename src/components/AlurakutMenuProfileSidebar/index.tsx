import React from "react";
import { AlurakutProfileSidebarMenuDefaultWrapper } from "./AlurakutMenuProfileSidebar.style";
const BASE_URL = "http://alurakut.vercel.app/";

export function AlurakutMenuProfileSidebar({ githubUser, isOpen }) {
  return (
    <div
      className={`alurakutMenuProfileSidebar ${
        isOpen ? "isOpenMenu" : "isClosedMenu"
      }`}
    >
      <div>
        <img
          src={`https://github.com/${githubUser}.png`}
          style={{ borderRadius: "8px" }}
        />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  );
}

function AlurakutProfileSidebarMenuDefault() {
  return (
    <AlurakutProfileSidebarMenuDefaultWrapper>
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
          Perfil
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
          Recados
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
          Fotos
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} />
          GitHub Trends
        </a>
        <a href="/logout">
          <img src={`${BASE_URL}//icons/logout.svg`} />
          Sair
        </a>
      </nav>
    </AlurakutProfileSidebarMenuDefaultWrapper>
  );
}
