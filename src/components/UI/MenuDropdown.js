import classes from "./MenuDropdown.module.css";

const MenuDropdown = (props) => {
  const options = props.options;

  return (
    <select
      name={props.name}
      className={classes.dropdown}
      // value="Kérjük, válasszon!"
      onChange={props.onChange}
    >
      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default MenuDropdown;
