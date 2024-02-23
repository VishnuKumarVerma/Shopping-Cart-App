import styles from "./App.module.css";
import DataItems from "./Components/DataItems";
import Header from "./Components/Header";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainClass}>
        <Header />
        <DataItems />
      </div>
    </div>
  );
}

export default App;
