import Greetings from "./components/Greeting";
import "./App.css";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <Async/>
      <Greetings />
    </div>
  );
}

export default App;
