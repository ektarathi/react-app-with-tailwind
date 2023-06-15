import { useEffect } from "react";
import Button from "./components/Button";
import { applyTheme } from "./theme/util";
import baseTheme from "./theme/base";
import darkTheme from "./theme/dark";

function App() {

  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

   return (
    <div className="App">
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 text-center">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
        <Button color="secondary" onClick={() => applyTheme(baseTheme)}>Base theme</Button>
        <Button color="primary" onClick={() => applyTheme(darkTheme)}>
          Dark theme
        </Button>
      </div>
    </div>
  );
}

export default App;
