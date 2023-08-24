import { useState, useEffect, useRef } from "react";
import styles from "./countDown.module.css"; // kurang styling

export default function CountDown() {
  const daysTensRef = useRef(null);
  const daysOnesRef = useRef(null);
  const hoursTensRef = useRef(null);
  const hoursOnesRef = useRef(null);
  const minutesTensRef = useRef(null);
  const minutesOnesRef = useRef(null);
  const secondsTensRef = useRef(null);
  const secondsOnesRef = useRef(null);

  function Timer() {
    useEffect(() => {
      setInterval(function () {
        // Set the date we're counting down to
        var countDownDate = new Date("Aug 30, 2023 23:59:59").getTime();

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        flip(daysTensRef, Math.floor(days / 10));
        flip(daysOnesRef, days % 10);
        flip(hoursTensRef, Math.floor(hours / 10));
        flip(hoursOnesRef, hours % 10);
        flip(minutesTensRef, Math.floor(minutes / 10));
        flip(minutesOnesRef, minutes % 10);
        flip(secondsTensRef, Math.floor(seconds / 10));
        flip(secondsOnesRef, seconds % 10);
      }, 1000);
    });
  }
  Timer();

  const flip = (flipCardRef, newNumber) => {
    const topHalf = flipCardRef.current.querySelector(`.${styles.top}`);
    const startNumber = parseInt(topHalf.textContent);

    if (newNumber === startNumber) return;

    const bottomHalf = flipCardRef.current.querySelector(`.${styles.bottom}`);
    const topFlip = document.createElement("div");
    topFlip.classList.add(styles["top-flip"]);
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add(styles["bottom-flip"]);

    topHalf.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", () => {
      topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", () => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", () => {
      bottomHalf.textContent = newNumber;
      bottomFlip.remove();
    });
    flipCardRef.current.append(topFlip, bottomFlip);
  };
  return (
    // kurang styling, monggo front-end :D
    <div className={`container text-center d-flex flex-column justify-content-center align-items-center ${styles["countdown-box"]}`}>
      <h2 className="mb-4">
        Countdown to the{" "}
        <span
          style={{
            color: "rgb(254, 108, 108)",
          }}
        >
          30 August 2023
        </span>
      </h2>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["days-hours"]}`}>
          <div className={`${styles["container-segment"]} ${styles["start"]}`}>
            <div className={`${styles["segment-title"]}`}>Days</div>
            <div className={`${styles["segment"]}`}>
              <div className={`${styles["flip-card"]}`} ref={daysTensRef}>
                <div className={`${styles["top"]}`}>0</div>
                <div className={`${styles["bottom"]}`}>0</div>
              </div>
              <div className={`${styles["flip-card"]}`} ref={daysOnesRef}>
                <div className={`${styles["top"]}`}>0</div>
                <div className={`${styles["bottom"]}`}>0</div>
              </div>
            </div>
          </div>
          <div className={`${styles["container-segment"]}`}>
            <div className={`${styles["segment-title"]}`}>Hours</div>
            <div className={`${styles["segment"]}`}>
              <div className={`${styles["flip-card"]}`} ref={hoursTensRef}>
                <div className={`${styles["top"]}`}>0</div>
                <div className={`${styles["bottom"]}`}>0</div>
              </div>
              <div className={`${styles["flip-card"]}`} ref={hoursOnesRef}>
                <div className={`${styles["top"]}`}>0</div>
                <div className={`${styles["bottom"]}`}>0</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["minutes-seconds"]} `}>
          <div className={`${styles["container-segment"]} ${styles["start"]}`}>
            <div className={`${styles["segment-title"]}`}>Minutes</div>
            <div className={`${styles["segment"]}`}>
              <div className={`${styles["flip-card"]}`} ref={minutesTensRef}>
                <div className={`${styles["top"]}`}>0</div>
                <div className={`${styles["bottom"]}`}>0</div>
              </div>
              <div className={`${styles["flip-card"]}`} ref={minutesOnesRef}>
                <div className={`${styles["top"]}`}>0</div>
                <div className={`${styles["bottom"]}`}>0</div>
              </div>
            </div>
          </div>
          <div className={`${styles["container-segment"]}`}>
            <div className={`${styles["segment-title"]}`}>Seconds</div>
            <div className={`${styles["segment"]}`}>
              <div className={`${styles["flip-card"]}`} ref={secondsTensRef}>
                <div className={`${styles["top"]}`}>0</div>
                <div className={`${styles["bottom"]}`}>0</div>
              </div>
              <div className={`${styles["flip-card"]}`} ref={secondsOnesRef}>
                <div className={`${styles["top"]}`}>0</div>
                <div className={`${styles["bottom"]}`}>0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
