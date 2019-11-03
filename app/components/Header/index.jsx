import React, { memo } from 'react';

import useFavourites from 'hooks/useFavourites';
import MenuLink from 'components/MenuLink';

import { Menu, NavigationBar } from './NavigationBar';

export default memo(function Header() {
  const { favourites } = useFavourites();
  return (
    <NavigationBar>
      <Menu>
        <MenuLink to="/">Galler<b>easy</b></MenuLink>
        <MenuLink to="/">Search</MenuLink>
        <MenuLink to="/favourites">Favourites ({favourites.length})</MenuLink>
      </Menu>
    </NavigationBar>
  )
}
)