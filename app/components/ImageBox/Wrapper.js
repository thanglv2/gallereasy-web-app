import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    margin: 50px auto;
    transition: transform .2s;
    div {
      visibility: ${props => props.isFavourite ? 'visible' : 'hidden'};
    }
    @media (hover:hover) {
      &:hover {
        div {
          visibility: visible;
          opacity: ${props => props.isFavourite ? 1 : 0.4};
        }
        cursor: pointer;
        transform: scale(1.1);
      }
    }
    @media(max-width: 600px) {
      margin: 25px auto;
    }
  }
`;

export default Wrapper;
