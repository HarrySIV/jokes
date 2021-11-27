import { useState } from 'react';
import styles from './App.module.css';

function App() {
const [joke, setJoke] = useState(`Click the button to get a joke`);
const getJoke = () => {
  const config = {
    headers: {
       'Accept': 'application/json'
    },
 }
  fetch('https://icanhazdadjoke.com/', config)
  .then(res => res.json())
  .then(data => setJoke(data.joke))
}

  return (
    <>
      <a href="https://harrysiv.github.io/resume/"><div id={styles.back}>Back</div></a>
      <div className={styles.container}>
        <h3>Are these even funny?</h3>
        <div className={styles.joke}>{joke}</div>
        <button className={styles.btn} onClick={getJoke}>Click me!</button>
      </div>
    </>
  );
}

export default App;
