import { Fragment } from "react";
import { useSelector } from "react-redux";
import About from "./components/About/About";
import Counter from "./components/Counter/Counter";

function App() {
  const isAboutSectionVisible = useSelector((state) => state.counter.isAboutSectionVisible);

  return (
    <Fragment>
      <Counter />
      {isAboutSectionVisible && <About />}
    </Fragment>
  );
}

export default App;
