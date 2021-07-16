import axios from "axios";
import React, { Dispatch } from "react";
import { Box } from "..";
import { addCommunities } from "../../services/datoCMSConnection";

type FormElements = HTMLFormControlsCollection & {
  title: HTMLInputElement;
  imageURL: HTMLInputElement;
};

type YourFormElement = HTMLFormElement & {
  readonly elements: FormElements;
};

type CommunityType = {
  title: string;
  imagemUrl: string;
  createAt: string;
};

type CommunityFormProps = {
  userCurrent: string;
  addCommunitiesParam: ({}: CommunityType) => void;
};

export default function CommunityForm(props: CommunityFormProps) {
  const { userCurrent, addCommunitiesParam } = props;
  const [user, setUser] = React.useState(userCurrent);

  const handleCommunity = async (
    event: React.FormEvent<YourFormElement>,
    createAt: string
  ) => {
    event.preventDefault();

    const title = event.currentTarget.elements.title;
    const imagemUrl = event.currentTarget.elements.imageURL;
    let imagem = imagemUrl.value;

    const res = await fetch("/api/comunidades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title.value, imagem, createAt }),
    }).then((response) => {
      return response.json();
    });
    const comunidade = {
      title: res.comunidade.title,
      imagemUrl: res.comunidade.imagemUrl,
      createAt: res.comunidade.createAt,
    };

    addCommunitiesParam(comunidade);
    title.value = "";
    imagemUrl.value = "";
  };
  return (
    <Box>
      <form
        onSubmit={(event: React.FormEvent<YourFormElement>) =>
          handleCommunity(event, user)
        }
      >
        <div>
          <input
            placeholder="Qual vai ser o nome da sua comunidade?"
            name="title"
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="URL para capa (Deixe vazio para uma imagem aleatória)"
            name="imageURL"
            aria-label="URL para capa (Deixe vazio para uma imagem aleatória)"
          />
        </div>
        <button type="submit">Criar comunidade</button>
      </form>
    </Box>
  );
}
