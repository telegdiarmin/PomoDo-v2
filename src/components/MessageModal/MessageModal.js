import { useDispatch } from "react-redux";

import Backdrop from "../UI/Backdrop";
import Button from "../UI/Button";
import Card from "../UI/Card";

import CloseIcon from "@mui/icons-material/Close";

import classes from "./MessageModal.module.css";
import { uiActions } from "../../store/ui-slice";
// import { useMessage } from "../../hooks/useMessage";

const aboutMessage = {
  title: "Névjegy",
  message: "PomoDo v2.0"
}


const MessageModal = () => {
  const dispatch = useDispatch();
  // const { message, approveAlert } = useMessage();

  const closeModalHandler = () => {
    dispatch(uiActions.toggleMessageModal());
  };

  const approveBtnClickHandler = () => {
    // approveAlert();
    closeModalHandler();
  };

  return (
    <Backdrop onClick={closeModalHandler}>
      <Card className={classes.messageModal}>
        <div className={classes.wrapper}>
          <h2>{aboutMessage.title}</h2>
          <CloseIcon
            className={classes.closeBtn}
            sx={{ transition: "0.2s" }}
            onClick={closeModalHandler}
          />
        </div>

        <p>{aboutMessage.message}</p>
        <Button
          title={"OK"}
          className={classes.dismissBtn}
          onClick={approveBtnClickHandler}
        />
      </Card>
    </Backdrop>
  );
};

export default MessageModal;
