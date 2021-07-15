const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const TOKEN_FULL = process.env.REACT_APP_TOKEN_FULL;

const { SiteClient } = require("datocms-client");

async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllCommunities() {
  const data = await fetchCmsAPI(`{
  allComunities {
    id
    title
    imagemUrl
    _status
    _firstPublishedAt
  }

  _allComunitiesMeta {
    count
  }
}`);

  return data.allComunities;
}

export async function getCommunitiesUser(user) {
  const data = await fetchCmsAPI(`{
  allComunities(filter: {createAt: {eq: "fernando-m-p"}}) {
    id
    title
    imagemUrl
    createAt
  }
}`);

  return data.allComunities;
}

export async function addCommunities(dadosComunidade) {
  const client = new SiteClient(process.env.REACT_APP_TOKEN_FULL);

  try {
    await client.items.create({
      itemType: "967551",
      title: dadosComunidade.title,
      imagem_url: dadosComunidade.imagemUrl,
      createAt: dadosComunidade.createAt,
    });
  } catch (e) {
    throw e;
  }
}
