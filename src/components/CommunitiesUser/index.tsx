import { CommunitiesUserBoxWrapper } from "./CommunitiesUser.style";

export default function CommunitiesUser({ communities }) {
  return (
    <>
      <CommunitiesUserBoxWrapper>
        <h2 className="smallTitle"> Comunidades({communities.length})</h2>
        <ul>
          {communities.slice(0, 6).map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a href={itemAtual.imagemUrl}>
                  <img src={itemAtual.imagemUrl} />
                  <span>{itemAtual.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </CommunitiesUserBoxWrapper>
    </>
  );
}
