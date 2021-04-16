import React from 'react';
import {ButtonComp} from './stories/Button'
import { Header } from './stories/Header';

function App() {
  return (
    <div>
      <Header />
      <ButtonComp label="Hey" />
      <ButtonComp backgroundColor="blue" color="white" label="Hello" />
    </div>
  );
}

export default App;
