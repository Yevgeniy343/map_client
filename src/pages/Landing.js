import Wrapper from "../wrappers/landing-wr";
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

export default Landing;
