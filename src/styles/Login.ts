import styled from "styled-components";

export const Logo = styled.h1`
  font-size: 6rem;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.backgroundBox},
    ${(props) => props.theme.colors.backgroundPrimary}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
