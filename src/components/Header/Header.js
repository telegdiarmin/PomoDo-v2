import { useDispatch } from "react-redux";

import logo from "../../assets/images/pomodo-logo.png";
import Button from "../UI/Button";

import classes from "./Header.module.css";

import { uiActions } from "../../store/ui-slice";
// import { useMessage } from "../../hooks/useMessage";

// const aboutMessage = {
//   title: "Névjegy",
//   message: `PomoDo v2.0
//   Fejlesztő: Telegdi Ármin, 2022.
//   Minden jog fenntartva.`
// }


const Header = () => {

  const dispatch = useDispatch();
  // const {updateMessage} = useMessage();

  const onAboutClickHandler = () => {
    // updateMessage(aboutMessage);
    dispatch(uiActions.toggleMessageModal());
  };

  return (
    <header className={classes.header}>
      <img src={logo} alt="P" />
      <h2>PomoDo</h2>
      <Button
        className={classes.aboutBtn}
        title={"Névjegy"}
        onClick={onAboutClickHandler}
      ></Button>
    </header>
  );
};

export default Header;
