import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import useFavourites from 'hooks/useFavourites';
import { Menu, MenuItem, NavigationBar } from './NavigationBar';

export default memo(function Header() {
  const { favourites } = useFavourites();
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
          <Link to="/favourites">Favourites ({favourites.length})</Link>
        </MenuItem>
      </Menu>
    </NavigationBar>
  )
}
)