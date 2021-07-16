import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ProfileRelationsBoxWrapper } from "./ProfileRelations.style";

type UserProfile = {
  nameUser: string;
  avatar: string;
};

export default function ProfileRelations({ user }) {
  const [following, setFollowing] = useState([] as UserProfile[]);
  const [followers, setFollowers] = useState([] as UserProfile[]);
  const [infoUser, setInfoUser] = useState({
    totalFollowing: "0",
    totalFollowers: "0",
  } as { totalFollowing: string; totalFollowers: string });
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => {
        if (res.status === 200) {
          const info = {
            totalFollowing: res.data.following,
            totalFollowers: res.data.followers,
          };
          setInfoUser(info);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.github.com/users/${user}/following`)
      .then((res) => {
        if (res.status === 200) {
          const seguindo = res.data
            .map((item) => {
              return {
                nameUser: item.login,
                avatar: item.avatar_url,
              };
            })
            .reverse();

          setFollowing(seguindo);
        }
      })
      .catch((err) => console.log(err));
    axios
      .get(`https://api.github.com/users/${user}/followers`)
      .then((res) => {
        if (res.status === 200) {
          const seguindo = res.data.map((item) => {
            return {
              nameUser: item.login,
              avatar: item.avatar_url,
            };
          });
          setFollowers(seguindo);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">Seguindo ({infoUser.totalFollowing})</h2>
        <ul>
          {following.slice(0, 6).map((itemAtual) => {
            return (
              <li key={itemAtual.nameUser}>
                <a href={`/profile/${itemAtual.nameUser}`}>
                  <img src={itemAtual.avatar} />
                  <span>{itemAtual.nameUser}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle"> Seguidores ({infoUser.totalFollowers})</h2>
        <ul>
          {followers.slice(0, 6).map((itemAtual) => {
            return (
              <li key={itemAtual.nameUser}>
                <a href={`/profile/${itemAtual.nameUser}`}>
                  <img src={itemAtual.avatar} />
                  <span>{itemAtual.nameUser}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
    </>
  );
}
