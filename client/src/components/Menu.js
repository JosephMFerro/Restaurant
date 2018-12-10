import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';

const Menu = ({id, name, openMenu}) => (
  <Segment secondary>
    <h3>{ name }</h3>
    <Button icon onClick = {() => openMenu(id)}>
      <Icon name = "eye" color = "orange"/>
    </Button>
  </Segment>
)

export default Menu;