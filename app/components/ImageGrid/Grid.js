import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    display: -ms-grid;
    text-align: center;
    img {
      border: 1px solid #ccc;
      box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
      -webkit-box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
      object-fit: cover;
      -o-object-fit: cover;
      width: 200px;
      height: 180px;
    }
    @media(max-width: 600px) {
      grid-template-columns: repeat(1, minmax(200px, 1fr));
      -ms-grid-columns: (minmax(200px, 1fr))[1];
    }
    @media(min-width: 600px) {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
      -ms-grid-columns: (minmax(200px, 1fr))[2];
    }
    @media(min-width: 768px) {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
      -ms-grid-columns: (minmax(200px, 1fr))[3];
    }
    @media(min-width: 992px) {
      grid-template-columns: repeat(4, minmax(200px, 1fr));
      -ms-grid-columns: (minmax(200px, 1fr))[4];
    }
`;

export default Wrapper;