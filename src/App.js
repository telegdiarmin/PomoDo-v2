import { Fragment } from "react";
import { useSelector } from "react-redux";
import About from "./components/About/About";
import Counter from "./components/Counter/Counter";

function App() {
  const isVisible = useSelector((state) => state.about.isVisible);

  return (
    <Fragment>
      <Counter />
      {isVisible && <About />}
    </Fragment>
  );
}

export default App;
