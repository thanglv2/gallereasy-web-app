import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    margin: 50px auto;
    max-width: 1000px;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-gap: 20px;
    align-items: center;
    img {
      border: 1px solid #ccc;
      box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
      object-fit: cover;
      width: 200px;
      height: 180px;
    }
`;

export default Wrapper;