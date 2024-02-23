import { useState } from "react";
import Input from "./Input";
import EmptyMessage from "./EmptyMessage";
import styles from "./DataItems.module.css";
import DataButtonsBuy from "./DataButtonsBuy";
import DataButtonsDelete from "./DataButtonsDelete";

const DataItems = () => {
  let [cartItems, setCartItems] = useState([]);

  const handleItemsChange = (newvalue) => {
    return setCartItems([...cartItems, newvalue]);
  };

  return (
    <>
      <Input onItemsChange={handleItemsChange} />
      {cartItems.length === 0 ? (
        <>
          <EmptyMessage />
        </>
      ) : (
        <div className="container text-center">
          {cartItems.map((items, index) => (
            <div key={index} className={`row ${styles.itemsRowClass}`}>
              <div className={`col ${styles.itemsColClass}`}>{items}</div>
              <div className="col"></div>
              <div className="col">
                <DataButtonsBuy />
                <DataButtonsDelete />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DataItems;
