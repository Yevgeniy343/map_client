import styled from "styled-components";

const Wrapper = styled.main`
  margin: 2rem;
  font-family: "Yeon Sung", cursive;
  .page-content {
    display: grid;
    grid-template-columns: 1fr;
    color: var(--theme-ui-colors-green70);
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 992px) {
    .page-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 3rem;
    }
  }
`;
export default Wrapper;
