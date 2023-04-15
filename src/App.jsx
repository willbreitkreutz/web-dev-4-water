import { useEffect, useState } from "react";
import useRouter from "./hooks/useRouter";

function App() {
  const [navCount, setNavCount] = useState(0);
  const [Route, routeParams] = useRouter();
  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setNavCount(navCount + 1);
    });
  });
  return (
    <div className="App">
      <h1>
        <a style={{ textDecoration: "none" }} href="/">
          CWMS Explorer
        </a>
      </h1>
      <div>
        <Route routeParams={routeParams} />
      </div>
    </div>
  );
}

export default App;
