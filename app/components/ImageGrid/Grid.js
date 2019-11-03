import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    img {
      border: 1px solid #ccc;
      box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
      -webkit-box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
      object-fit: cover;
      -o-object-fit: cover;
      width: 200px;
      height: 180px;
    }
`;

export default Wrapper;