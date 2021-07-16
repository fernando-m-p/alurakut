import styled from "styled-components";
import { ColumGrid } from "../ColumMain/ColumMain.style";
import { BoxContainer } from "../Box/Box.style";
import { Logo } from "../Menu/Menu.style";

export const LoginGridContainer = styled.main`
  width: 100%;
  grid-gap: 12px 16px;
  margin: auto;
  max-width: 500px;
  padding: 12px;
  overflow: visible;

  @media (min-width: 860px) {
    max-width: 70%;
    height: 600px;
    display: grid;
    grid-template-areas: "panel login" "footerLogin footerLogin";
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 27px;
  }

  ${BoxContainer} {
    height: 100%;
  }

  ${ColumGrid} {
    &.panel {
      grid-area: panel;
      height: 100%;
      ${BoxContainer} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      ${Logo} {
      }
    }
    &.footerLogin {
      grid-area: footerLogin;
      height: 100%;
      ${BoxContainer} {
        padding: 2px;
        color: ${(props) => props.theme.colors.textSecondary};
        background: ${(props) => props.theme.colors.backgroundSecondary};
      }
      text-align: center;
    }
    &.formLogin {
      grid-area: login;
      display: grid;
      grid-template-rows: 4fr 1fr;
      grid-gap: 13px;

      ${BoxContainer} {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 0.8rem;
        padding: 20px;

        input {
          border: 1px solid ${(props) => props.theme.colors.primary};
          margin: 10px auto;
          font-size: 0.8rem;
        }

        button {
          font-size: 1.1rem;
          font-weight: bold;
        }
      }
    }
  }
`;
