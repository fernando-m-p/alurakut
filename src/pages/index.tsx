import React from "react";
import {
  Menu,
  Box,
  MainGrid,
  ColumMain,
  ProfileRelations,
  OrkutNostalgicIconSet,
} from "../components";

export default function Home() {
  const usuarioAleatorio = "fernando-m-p";
  return (
    <>
      <Menu />
      <MainGrid>
        <ColumMain className="profileArea">
          <Box>
            <a href={`https://github.com/${usuarioAleatorio}`}>
              <img src={`https://github.com/${usuarioAleatorio}.png`} />
            </a>
          </Box>
        </ColumMain>
        <ColumMain className="welcomeArea">
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </ColumMain>
        <ColumMain className="profileRelationsArea">
          <ProfileRelations user={usuarioAleatorio}></ProfileRelations>
        </ColumMain>
      </MainGrid>
    </>
  );
}
