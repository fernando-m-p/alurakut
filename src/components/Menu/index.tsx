import React, { InputHTMLAttributes } from "react";
import { MenuHeader, Logo } from "./Menu.style";

const BASE_URL = "http://alurakut.vercel.app/";
const v = "1";

import { Link } from "../Link";
import { AlurakutMenuProfileSidebar } from "../AlurakutMenuProfileSidebar";

type MenuProps = InputHTMLAttributes<HTMLBaseElement> & {
  userProfile: string;
};

export default function Menu({ userProfile, ...props }: MenuProps) {
  const [isMenuOpen, setMenuState] = React.useState(false);
  const links = [
    { name: "Inicio", slug: "/" },
    { name: "Amigos", slug: "/amigos" },
    { name: "Comunidades", slug: "/comunidades" },
  ];
  return (
    <MenuHeader {...props}>
      <div className="container">
        <Logo src={`${BASE_URL}/logo.svg`} />
        <nav className="links">
          {links.map((menuItem) => {
            return (
              <Link
                key={`key__${menuItem.name.toLocaleLowerCase()}`}
                href={`${menuItem.slug.toLocaleLowerCase()}`}
              >
                {menuItem.name}
              </Link>
            );
          })}
        </nav>
        <nav>
          <a href={`/logout`}>Sair</a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && (
            <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />
          )}
        </button>
        <AlurakutMenuProfileSidebar
          githubUser={userProfile}
          isOpen={isMenuOpen}
        />
      </div>
    </MenuHeader>
  );
}
