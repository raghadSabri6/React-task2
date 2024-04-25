import { useState } from "react";
import style from './Count.module.css';

function Count() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }
  
  return (
    <button className={style.btn} onClick={handleCount}>
      Raghad Counter {count}
    </button>
  );
}

export default Count;
