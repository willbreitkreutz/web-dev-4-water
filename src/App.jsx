import useRouter from "./hooks/useRouter";

function App() {
  const [Route, routeParams] = useRouter();
  return (
    <div className="App">
      <h1>
        <a style={{ textDecoration: "none" }} href="/">
          CWMS
        </a>
      </h1>
      <div>
        <Route routeParams={routeParams} />
      </div>
    </div>
  );
}

export default App;
