import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *, html, body, #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
`;

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
