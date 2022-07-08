import { Fragment } from "react";
import { useSelector } from "react-redux";
import About from "./components/About/About";
import Counter from "./components/Counter/Counter";
import SettingsModal from "./components/SettingsModal/SettingsModal";
import MessageModal from "./components/MessageModal/MessageModal";

function App() {
  const isAboutSectionVisible = useSelector((state) => state.ui.isAboutSectionVisible);
  const isSettingsModalVisible = useSelector((state)=> state.ui.isSettingsModalVisible);
  const isMessageModalVisible = useSelector((state) => state.ui.isMessageModalVisible);

  return (
    <Fragment>
      {isSettingsModalVisible && <SettingsModal/>}
      {isMessageModalVisible && <MessageModal/>}
      <Counter />
      {isAboutSectionVisible && <About />}
    </Fragment>
  );
}

export default App;
