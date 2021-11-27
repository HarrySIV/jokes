import { useState } from 'react';
import styles from './App.module.css';
import axios from 'axios';

function App() {
const [joke, setJoke] = useState(`Click the button to get a joke`);
const getJoke = () => {
  const config = {
    headers: {
       'Accept': 'application/json'
    },
 }
  axios.get('https://icanhazdadjoke.com/', config)
  .then(res => setJoke(res.data.joke))
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
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
