import styles from './DataButtons.module.css';

const DataButtonsBuy = () => {
  return (
    <>
      <button type="button" className={`btn btn-warning ${styles.btnClass}`}>
        Buy
      </button>
    </>
  );
};

export default DataButtonsBuy;
