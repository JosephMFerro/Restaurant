import React from 'react';
import Menu from './Menu';

const MenuList = ({ id, menus, openMenu }) => (
  <div>
    {
      menus.map( menu => 
        <Menu 
        key = {menu.id} {...menu}
        openMenu = {openMenu}
        />
      )
    }
  </div>
)

export default MenuList;