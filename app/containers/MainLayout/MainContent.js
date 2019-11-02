import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  margin: 50px auto;
  width: 100%;
`;

export { Layout, MainContent };