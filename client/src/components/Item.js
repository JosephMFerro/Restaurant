import React from 'react';
import { Segment, } from 'semantic-ui-react';

class Item extends React.Component {
  state = {
    items:[
      {id: 1, name: "test item"}
    ]
  };

  render() {
    debugger
    return (
      <Segment secondary>
        <h3>{ this.state.name }</h3>
      </Segment>
    )
  }
}

// const Item = ({id, name}) => (

// )

export default Item;