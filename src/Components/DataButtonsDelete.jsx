import styles from "./DataButtons.module.css";

const DataButtonsDelete = () => {
  return (
    <>
      <button type="button" className={`btn btn-danger ${styles.btnClass}`}>
        Delete
      </button>
    </>
  );
};

export default DataButtonsDelete;
