import './App.css';
import Input from "./Input";

function App() {
  const showValue = (value) => <b>The value is {value}</b>;
  const multiplyByTen = (value) => <>The multiplied value is {value * 10}</>;
  return (
    <div className="App">
      <Input renderTextBelow={showValue} />
      <br />
      <Input renderTextBelow={multiplyByTen} />
    </div>
  );
}

export default App;
