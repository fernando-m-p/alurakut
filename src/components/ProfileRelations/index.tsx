import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileRelationsBoxWrapper } from "./ProfileRelations.style";

type UserProfile = {
  nameUser: string;
  link: string;
  avatar: string;
};

export default function ProfileRelations({ user }) {
  const [following, setFollowing] = useState([] as UserProfile[]);
  const [followers, setFollowers] = useState([] as UserProfile[]);
  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}/following`).then((res) => {
      const seguindo = res.data
        .map((item) => {
          return {
            nameUser: item.login,
            link: item.html_url,
            avatar: item.avatar_url,
          };
        })
        .reverse();

      setFollowing(seguindo.slice(0, 6));
    });
    axios.get(`https://api.github.com/users/${user}/followers`).then((res) => {
      const seguindo = res.data.map((item) => {
        return {
          nameUser: item.login,
          link: item.html_url,
          avatar: item.avatar_url,
        };
      });
      setFollowers(seguindo.slice(0, 5));
    });
  }, []);

  return (
    <>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">Seguindo ({following.length})</h2>
        <ul>
          {following.map((itemAtual) => {
            return (
              <li key={itemAtual.nameUser}>
                <a href={itemAtual.link}>
                  <img src={itemAtual.avatar} />
                  <span>{itemAtual.nameUser}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle"> Seguidores ({followers.length})</h2>
        <ul>
          {followers.map((itemAtual) => {
            return (
              <li key={itemAtual.nameUser}>
                <a href={itemAtual.link}>
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
