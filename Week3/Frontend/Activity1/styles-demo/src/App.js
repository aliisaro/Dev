import styles from "./styles.module.css";

const App = () => {
  return (
    <div>
      <h1 className={styles.moduleHeading}>CSS Modules</h1>

      <h1 className={styles.moduleHeading}>Inline Styles</h1>
      <p className={styles.moduleParagraph}>This is a green paragraph.</p>
    </div>
  );
};

export default App;
