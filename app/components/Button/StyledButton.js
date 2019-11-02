
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #fff;
  background-color: ${props => props.theme.dodgerblue};
  border-color: ${props => props.theme.dodgerblue};
  text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
  box-shadow: 0 2px 0 rgba(0,0,0,0.045);
  height: 40px;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 4px;
  outline: 0;
  margin: auto;
  display: block;
  &:hover {
    cursor: pointer;
  }
`;

export default StyledButton;