import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingIndicator = styled.div`
  margin: 50px auto;
  border: 8px solid ${props => props.theme.darkgrey};
  border-radius: 50%;
  border-top: 8px solid ${props => props.theme.dodgerblue};
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
`;

const Wrapper = styled.div`
  width: 100%;
  align-items: center;
`;

export { LoadingIndicator, Wrapper };