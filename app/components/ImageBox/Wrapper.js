import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
    position: relative;
    div {
      visibility: ${props => props.isFavourite ? 'visible' : 'hidden'};
    }
    &:hover {
      div {
        visibility: visible;
        opacity: ${props => props.isFavourite ? 1 : 0.4};
      }
      cursor: pointer;
    }
`;

export default Wrapper;
