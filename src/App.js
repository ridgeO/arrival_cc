import React, { Component } from 'react';
import styled from 'styled-components';
import MenuContainer from './Components/Menu.js';

const AppContainer = styled.div`
  width: 100vw;
  min-height: calc(178vw - 84px);
  display: grid;
  grid-template-columns: 100%;
  border-bottom: 1px solid red;
  font-family: 'Cardo', serif;
  font-weight: 200;
  letter-spacing: 1px;
  font-feature-settings: "liga" 0;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <MenuContainer/>
      </AppContainer>
    );
  }
}

export default App;
