import './App.css';

import Canvas from './components/Canvas'
import CanvasConfigHandler from './components/CanvasConfigHandler'

function App() {
  return (
    <section className="App">
      <CanvasConfigHandler />
      <Canvas />
    </section>
  );
}

export default App;
