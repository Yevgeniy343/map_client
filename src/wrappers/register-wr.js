import styled from "styled-components";

const Wrapper = styled.main`
  font-family: "Yeon Sung", cursive;

  svg {
    color: var(--theme-ui-colors-green70);
    width: 2rem;
    border: 1px solid var(--theme-ui-colors-green70);
    font-size: 1.3rem;
  }
  svg:hover {
    background-color: var(--theme-ui-colors-green20);
    border-radius: 40px;
  }
  .input-content {
    text-align: center;
  }
  h1 {
    text-align: center;
  }
  button {
    font-family: "Yeon Sung", cursive;
    font-size: 1.3rem;
  }
  .actions {
    margin: 1rem;
    text-align: center;
  }
  .input-decoration {
    border: none;
    border-bottom: 7px solid var(--theme-ui-colors-green50);
    font-family: "Yeon Sung", cursive;
    font-size: 1.3rem;
    caret-color: var(--theme-ui-colors-yellow50);
    :focus-visible {
      outline: none;
      background-color: var(--theme-ui-colors-green20);
      ::placeholder {
        font-size: 1rem;
      }
    }
    ::placeholder {
      color: gray;
    }
  }
  @media (min-width: 992px) {
  }
`;
export default Wrapper;
