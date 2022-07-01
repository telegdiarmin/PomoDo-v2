import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./MenuDropdown.module.css";

const MenuDropdown = (props) => {
  const options = props.options;
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.defaultOption);

  const toggleDropdownHandler = () => {
    setIsVisible(!isVisible);
  };

  const selectOptionHandler = (event) => {
    const newSelection = {
      key: event.currentTarget.getAttribute("key"),
      value: event.currentTarget.getAttribute("value"),
      label: event.currentTarget.getAttribute("data-label"),
    };
    setSelectedOption(newSelection);
    setIsVisible(false);
  };

  // useEffect(() => {
  //   if (!isComponentVisible) {
  //     setIsVisible(isComponentVisible);
  //   }
  // }, [isComponentVisible]);

  const onClickOutside = () => {
    setIsVisible(false);
    document.removeEventListener("click", onClickOutside);
  };
  const setEventListener = () => {
    document.addEventListener("click", onClickOutside);
  };

  useEffect(() => {
    console.log("Selected option passed to parent: " + selectedOption);
    props.onOptionSelect(selectedOption);
  }, [selectedOption]);

  return (
    <div className={classes.wrapper}>
      <button
        name={props.name}
        className={classes.dropdown}
        onClick={toggleDropdownHandler}
        onMouseLeave={setEventListener}
      >
        {selectedOption.label}
        <KeyboardArrowDownIcon
          className={isVisible ? classes.dropdownArrow : ""}
          sx={{ transition: "0.2s" }}
        />
      </button>
      <div>
        {isVisible && (
          <div className={classes.dropdownList} onMouseLeave={setEventListener}>
            <ul>
              {options.map((option) => (
                <li
                  className={classes.dropdownListPar}
                  key={option.key}
                  value={option.value}
                  data-label={option.label}
                  onClick={selectOptionHandler}
                >
                  <p>{option.label}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default MenuDropdown;
