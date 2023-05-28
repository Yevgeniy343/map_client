import styled from "styled-components";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <div className="page-content">
        <div>
          <h1>Shop</h1>
          <p>
            Далеко-далеко за словесными горами в стране гласных и согласных
            живут рыбные тексты. Букв точках речью даль запятых не над? Инициал,
            реторический. Имеет возвращайся гор своих свой рот запятых по всей
            предупредила щеке свое.
          </p>
          <Link to="/register" className="btn">
            Вход/Регистрация
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  margin: 2rem;
  .page-content {
    display: grid;
    grid-template-columns: 1fr;
    color: var(--theme-ui-colors-green70);
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
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
