import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    margin: 20px;
    transition: transform .2s;
    div {
      visibility: ${props => props.isFavourite ? 'visible' : 'hidden'};
    }
    &:hover {
      div {
        visibility: visible;
        opacity: ${props => props.isFavourite ? 1 : 0.4};
      }
      cursor: pointer;
      transform: scale(1.1);
    }
    @media (hover: none) {
      &:hover {
        transform: none;
        div {
          visibility: ${props => props.isFavourite ? 'visible' : 'hidden'};
        }
      }
    }
  }
`;

export default Wrapper;
