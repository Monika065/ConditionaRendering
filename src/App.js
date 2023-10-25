import { Test } from "./component/Test";
import { useState } from "react";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsToggled(!isToggled)}>Toggled</button>
      {isToggled && <Test />}
      {isToggled ? <Test /> : <p> The value is false!</p>}
    </div>
  );
}
export default App;
