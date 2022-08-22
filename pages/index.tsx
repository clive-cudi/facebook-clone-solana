import { useState } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/home/home.module.css';

const style = {
  wrapper: `bg-[#18181o] min-h-screen, duration-[0.5s]`,
  homeWrapper: `flex flex-col items-center justify-center`,
  center: `flex-1`,
  main: `flex-1 flext justify-center items`,
  signupContainer: `flex items-center justify-center w-screen h-[70vh]`,
}

const Home: NextPage = () => {
  const [registered, setRegistered] = useState(false);

  return (
    <div className={styles.app}>
      {
        registered ? (
          <div className={styles.content}>
            
          </div>
        ) : (
          <div className={style.signupContainer}>
            <div className={style.center}>
              <div className={style.main}>
                <input type={`text`} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Home
