import { Fragment } from "react";
import { useSelector } from "react-redux";
import About from "./components/About/About";
import Counter from "./components/Counter/Counter";
import SettingsModal from "./components/SettingsModal/SettingsModal";

function App() {
  const isAboutSectionVisible = useSelector((state) => state.ui.isAboutSectionVisible);
  const isSettingsModalVisible = useSelector((state)=> state.ui.isSettingsModalVisible)

  return (
    <Fragment>
      {isSettingsModalVisible && <SettingsModal/>}
      <Counter />
      {isAboutSectionVisible && <About />}
    </Fragment>
  );
}

export default App;
