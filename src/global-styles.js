import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

const BaseTheme = {
  color: "var(--clr-grey-9)",
};

const DarkTheme = {
  color: "var(--dark-bg-primary)",
};
const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    height: 100%;
  }
  .page-header{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }
  .component-header{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;

const GlobalStyles = () => {
  const { theme } = useSelector((store) => store.user);

  return (
    <ThemeProvider theme={theme ? DarkTheme : BaseTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default GlobalStyles;
