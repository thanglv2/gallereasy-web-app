
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    outline: none;
    font-size: 30px;
    background-color: ${props => props.theme.bg}
    padding-bottom: 10px;
    &::placeholder {
      color: ${props => props.theme.grey};
      font-weight: normal;
    }
  }
`;

export default Wrapper;