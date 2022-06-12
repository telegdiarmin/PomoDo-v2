import classes from "./MainButtonSettings.module.css";
import SettingsIcon from "@mui/icons-material/Settings";

const MainButtonSettings = () => {
  return (
    <SettingsIcon
      className={classes.mainButtonSettings}
      sx={{ fontSize: "36px", transition: "0.2s" }}
    />
  );
};

export default MainButtonSettings;
