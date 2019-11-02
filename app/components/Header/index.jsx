import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, NavigationBar } from './NavigationBar';

export default function Header() {
  return (
    <NavigationBar>
      <Menu>
        <MenuItem>
          <Link to="/">Galler<b>easy</b></Link>
        </MenuItem>
        <MenuItem className="active" >
          <Link to="/">Search</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/favourites">Favourites (1)</Link>
        </MenuItem>
      </Menu>
    </NavigationBar>
  )
}
