import './App.css';
import { Greet } from './components/Greet';
import Heading from './components/heading';
import { Oscar } from './components/oscar';

function App() {
  return (
    <div className="App">
      <Greet name='Rohith' somecount={6} />
      <Heading>Hi this is Heading</Heading>
      <Oscar>
        <Heading>Oscar goes to me</Heading>
      </Oscar>
    </div>
  );
}

export default App;
