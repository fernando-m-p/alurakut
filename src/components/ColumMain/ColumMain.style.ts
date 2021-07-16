import styled from "styled-components";

export const ColumGrid = styled.div`
  &.profileArea {
    display: none;
    grid-area: profileArea;

    @media (min-width: 860px) {
      display: block;
    }

    img {
      border-radius: 8px;
    }
  }

  &.welcomeArea {
  }
`;
