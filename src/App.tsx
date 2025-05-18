import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// source: https://www.google.com/search?q=scaffold+github+repo+for+react+typescript+vite+project+with+jest+unit+testing&client=firefox-b-1-d&sca_esv=7878407e435a1be3&ei=xF4paMm7Fd2x5NoP-pOTkAk&ved=0ahUKEwjJrZ6SlKyNAxXdGFkFHfrJBJIQ4dUDCBA&oq=scaffold+github+repo+for+react+typescript+vite+project+with+jest+unit+testing&gs_lp=Egxnd3Mtd2l6LXNlcnAiTXNjYWZmb2xkIGdpdGh1YiByZXBvIGZvciByZWFjdCB0eXBlc2NyaXB0IHZpdGUgcHJvamVjdCB3aXRoIGplc3QgdW5pdCB0ZXN0aW5nSABQAFgAcAB4AZABAJgBAKABAKoBALgBDMgBAJgCAKACAJgDAJIHAKAHALIHALgHAA&sclient=gws-wiz-serp
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
