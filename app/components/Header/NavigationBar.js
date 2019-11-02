import styled from 'styled-components';

const NavigationBar = styled.nav`
  top: 0;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.grey};
`;

const Menu = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  & > :first-child > a {
    color: ${props => props.theme.dimgrey};
    border-right: 2px solid ${props => props.theme.grey};
    display: block;
    padding: 0 25px;
  }
`;

const MenuItem = styled.li`
  float: left;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  a {
    text-decoration: none;
    color: ${props => props.theme.grey};
  }
  &.active {
    a {
      color: black;
    }
  }
`;

export { NavigationBar, Menu, MenuItem };