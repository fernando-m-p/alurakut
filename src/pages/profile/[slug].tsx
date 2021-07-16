import { GetStaticPaths } from "next";
import React, { Context } from "react";
import {
  Menu,
  Box,
  MainGrid,
  ColumMain,
  ProfileRelations,
  OrkutNostalgicIconSet,
  CommunitiesUser,
  CommunityForm,
} from "../../components";
import { getCommunitiesUser } from "../../services/datoCMSConnection";

export default function Home({ communities, user }) {
  const [communitiesState, setCommunitiesState] = React.useState(communities);
  const addCommunities = (community) => {
    setCommunitiesState([community, ...communitiesState]);
  };
  React.useEffect(() => {}, [communitiesState]);
  return (
    <>
      <Menu userProfile={user} />
      <MainGrid>
        <ColumMain className="profileArea">
          <Box>
            <a href={`https://github.com/${user}`}>
              <img src={`https://github.com/${user}.png`} />
            </a>
          </Box>
        </ColumMain>
        <ColumMain className="welcomeArea">
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <CommunityForm
            userCurrent={user}
            addCommunitiesParam={addCommunities}
          />
        </ColumMain>
        <ColumMain className="profileRelationsArea">
          <ProfileRelations user={user}></ProfileRelations>
          <CommunitiesUser communities={communitiesState} />
        </ColumMain>
      </MainGrid>
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx: any) => {
  const { slug } = ctx.params;
  const user = slug;
  const communities = await getCommunitiesUser(user);
  return {
    props: {
      communities,
      user,
    },
    revalidate: 120,
  };
};
