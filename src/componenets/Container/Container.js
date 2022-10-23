import styles from "./Container.module.scss";
import Timer from "../Timer/Timer"
import Button from "../Button/Button";

import { useState, useEffect } from "react";

const Container = () =>{

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className={styles.container}>
      <Timer time={time} /> 
      <div className={styles.buttons}>
        <Button onClick={handleStart}>START</Button>
        <Button onClick={handlePauseResume}>STOP</Button>
        <Button onClick={handleReset}>RESET</Button>
      </div>
    </div>
  );
};

export default Container;