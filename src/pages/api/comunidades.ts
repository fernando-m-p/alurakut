import { addCommunities } from "../../services/datoCMSConnection";
export default async function receberRequest(request, response) {
  const comunidadeNova = request.body;
  const comunidadeSalva = await salvaComunidade(
    comunidadeNova.title,
    comunidadeNova.createAt,
    comunidadeNova.imagem
  );
  response.json({
    dados: "Algum dado qualquer",
    comunidade: comunidadeSalva,
  });
  return;
}

async function salvaComunidade(
  titulo: string,
  user: string,
  imagem: string = ""
) {
  if (imagem === "") {
    imagem = `https://picsum.photos/300/300?${Math.random()}`;
  }
  return await addCommunities({
    title: titulo,
    imagemUrl: imagem,
    createAt: user,
  });
}
