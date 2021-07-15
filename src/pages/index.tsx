import React from "react";
import {
  Menu,
  Box,
  MainGrid,
  ColumMain,
  ProfileRelations,
  OrkutNostalgicIconSet,
  CommunitiesUser,
  CommunityForm,
} from "../components";
import { getCommunitiesUser } from "../services/datoCMSConnection";

export default function Home({ communities, usuarioAleatorio }) {
  const [communitiesState, setCommunitiesState] = React.useState(communities);
  const addCommunities = (community) => {
    setCommunitiesState([community, ...communitiesState]);
  };
  React.useEffect(() => {}, [communitiesState]);
  return (
    <>
      <Menu userProfile={usuarioAleatorio} />
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
          <CommunityForm
            userCurrent={usuarioAleatorio}
            addCommunitiesParam={addCommunities}
          />
        </ColumMain>
        <ColumMain className="profileRelationsArea">
          <ProfileRelations user={usuarioAleatorio}></ProfileRelations>
          <CommunitiesUser communities={communitiesState} />
        </ColumMain>
      </MainGrid>
    </>
  );
}

export const getStaticProps = async () => {
  const usuarioAleatorio = "fernando-m-p";
  const communities = await getCommunitiesUser(usuarioAleatorio);
  return {
    props: {
      communities,
      usuarioAleatorio,
    },
    revalidate: 120,
  };
};
