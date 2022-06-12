import { Fragment } from "react";
import classes from "./App.module.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <Fragment className={classes.App}>
      <Counter/>
    </Fragment>
  );
}

export default App;
