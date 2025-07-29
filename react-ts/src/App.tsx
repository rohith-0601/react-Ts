import './App.css';
import { Button } from './components/button';
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
      <Button handleclick={(event)=>{
        console.log("Button clicked",event);
      }}></Button>
    </div>
  );
}

export default App;
