
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 15px 50px;
  background-color: ${props => props.theme.darkgrey};
  span {
    color: ${props => props.theme.dimgrey};
    font-weight: 500;
  }
`;

export default Wrapper;