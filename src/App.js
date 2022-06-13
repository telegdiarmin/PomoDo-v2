import { Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import About from "./components/About/About";
import Counter from "./components/Counter/Counter";

function App() {
  const isVisible = useSelector((state) => state.about.isVisible);

  const aboutRef = useRef(null);

  return (
    <Fragment>
      <Counter aboutRef={aboutRef}/>
      {isVisible && <About ref={aboutRef}/>}
    </Fragment>
  );
}

export default App;
