
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 50px;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.darkgrey};
  span {
    color: ${props => props.theme.dimgrey};
    font-weight: 500;
    margin: 0 50px;
  }
  @media(max-width: 600px) {
    span {
      margin: 0 10px;
    }
  }
`;

export default Wrapper;