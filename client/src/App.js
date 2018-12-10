import React, { Component } from 'react';
import MenuList from './components/MenuList';
import ItemList from './components/ItemList';
import { Container } from 'semantic-ui-react';

class App extends Component {
  state = { 
    menus:[
    {id: 1, name: "spaghetti menu"},
    {id: 2, name: "drink menu"},
    {id: 3, name: "pasta menu"},
    {id: 4, name: "pizza menu"},
    {id: 5, name: "cannoli menu"},
    {id: 6, name: "tomato menu"},
    ] 
  };

  componentDidMount() {

  }

  openMenu = (id) => {
    return (
      <ItemList />
    )
  }

  render() {
    return (
      <Container style = {{margin: "20px 400px", textAlign: "center", color: "orange"}}>
        <h2 style = {{fontFamily: "monospace"}}>Mi Restaurant</h2>
        <hr />
        <br />
        <MenuList menus = {this.state.menus} openMenu = {this.openMenu}/>
      </Container>
    );
  }
}

export default App;
