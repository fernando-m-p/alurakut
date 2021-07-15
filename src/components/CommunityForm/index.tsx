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

export default function CommunityForm({
  userCurrent,
  addCommunitiesParam,
}: {
  userCurrent: string;
  addCommunitiesParam: ({}: {
    title: string;
    imagemUrl: string;
    createAt: string;
  }) => void;
}) {
  const [user, setUser] = React.useState(userCurrent);
  const handleCommunity = async (
    event: React.FormEvent<YourFormElement>,
    userParam: string
  ) => {
    event.preventDefault();
    const title = event.currentTarget.elements.title;
    const imagemUrl = event.currentTarget.elements.imageURL;
    let imagem = imagemUrl.value;

    if (imagem === undefined || imagem === "") {
      const idAleatorio = Math.random();
      imagem = `https://picsum.photos/300/300?${idAleatorio}`;
    }
    const createAt = userParam;
    await addCommunities({
      title: title.value.toString(),
      imagemUrl: imagem,
      createAt,
    });
    addCommunitiesParam({
      title: title.value.toString(),
      imagemUrl: imagem,
      createAt,
    });
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
