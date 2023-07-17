import { useRef, useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  return (
    <div className={styles.container}>
      <div className={styles.state}>
        <div>カウント（useState）:{count}</div>
        <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      </div>
      <div className={styles.ref}>
        <div>カウント（useRef）:{countRef.current}</div>
        <button onClick={() => countRef.current++}>カウントアップ</button>
      </div>
    </div>
  );
};

export default Home;
