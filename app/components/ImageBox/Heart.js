import styled from 'styled-components';

const Hearth = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  &:before, &:after {
    position: absolute;
    content: "";
    left: 20px;
    top: 0;
    width: 20px;
    height: 35px;
    background: #d83030;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &:after{
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

export default Hearth;

