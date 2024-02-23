import styles from "./Input.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Input = ({ onItemsChange }) => {
  let [newItem, setNewItem] = useState("");

  const inputChange = (e) => {
    return setNewItem(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === "Enter" && newItem.trim() != "") {
      onItemsChange(newItem.trim());
      setNewItem("");
    }
  };

  return (
    <>
      <input
        type="text"
        className={styles.inputClass}
        value={newItem}
        placeholder="Enter the items and ENTER"
        onChange={inputChange}
        onKeyDown={keyPress}
      />
    </>
  );
};

Input.propTypes = {
  onItemsChange: PropTypes.function, // Assuming PropsItems is a string
};

export default Input;
