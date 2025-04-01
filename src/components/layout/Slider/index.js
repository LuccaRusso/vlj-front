import { useState, useEffect } from "react";
import styles from "./Slider.module.css";

function Slider() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount >= 4 ? 1 : prevCount + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {[1, 2, 3, 4].map((num) => (
          <input
            key={num}
            type="radio"
            name="radio-btn"
            id={`radio${num}`}
            checked={count === num}
            readOnly
          />
        ))}

        <div className={styles.slide} style={{ marginLeft: `-${(count - 1) * 25}%` }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1740997621838-faaec5fa62d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem 1"
          />
        </div>
        <div className={styles.slide}>
          <img
            src="https://images.unsplash.com/photo-1742268351241-b1b2ccae70c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem 2"
          />
        </div>
        <div className={styles.slide}>
          <img
            src="https://images.unsplash.com/photo-1741936428950-3f66f0a69320?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem 3"
          />
        </div>
        <div className={styles.slide}>
          <img
            src="https://images.unsplash.com/photo-1742268351428-ba1366f7dae3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem 4"
          />
        </div>
      </div>

      <div className={styles.navigationmanual}>
        {[1, 2, 3, 4].map((num) => (
          <label
            key={num}
            className={styles.manualbtn}
            onClick={() => setCount(num)}
          ></label>
        ))}
      </div>
    </div>
  );
}

export default Slider;
