import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    margin: 50px auto;
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
      }
    }
  }
`;

export default Wrapper;
