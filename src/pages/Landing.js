import styled from "styled-components";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <div className="page-content">
        <div>
          <h1>WEB Messenger</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, soluta
            consectetur error illum nam omnis quibusdam voluptates laboriosam
            velit optio dolores unde debitis esse sunt mollitia, iusto
            aspernatur numquam. Laboriosam! loremru
          </p>
          <Link to="/register" className="btn">
            Login/Registration
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
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

export default Landing;
