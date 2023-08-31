import { useState, useEffect, useRef } from "react";
import styles from "./countDown.module.css";
import timer from "@/api/timer";

export default function CountDown() {
  const daysTensRef = useRef(null);
  const daysOnesRef = useRef(null);
  const hoursTensRef = useRef(null);
  const hoursOnesRef = useRef(null);
  const minutesTensRef = useRef(null);
  const minutesOnesRef = useRef(null);
  const secondsTensRef = useRef(null);
  const secondsOnesRef = useRef(null);
  const [timerData, setTimerData] = useState({});

  useEffect(() => {
    async function fetchTimerData() {
      const data = await timer("pendaftaran");
      setTimerData(data);
    }

    fetchTimerData();
  }, []);

  useEffect(() => {
    if (timerData) {
      const countDownDate = new Date(timerData.time_start).getTime();

      const intervalId = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        if (distance > 0) {
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

        } else if (distance < 0) {
          clearInterval(intervalId);
          const countForward = new Date(timerData.time_end).getTime();
          const intervalId2 = setInterval(function () {
            var now = new Date().getTime();
            var distance = countForward - now;

            if (distance > 0) {
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

            } else if (distance < 0) {
              clearInterval(intervalId2);
              flip(daysTensRef, 0);
              flip(daysOnesRef, 0);
              flip(hoursTensRef, 0);
              flip(hoursOnesRef, 0);
              flip(minutesTensRef, 0);
              flip(minutesOnesRef, 0);
              flip(secondsTensRef, 0);
              flip(secondsOnesRef, 0);
            }
          }, 1000);

        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timerData]);

  const flip = (flipCardRef, newNumber) => {
    if (!flipCardRef || !flipCardRef.current) {
      return;
    }
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
    <div
      className={`text-center mb-4 d-flex justify-content-center align-items-center ${styles["countdown-box"]}`}
    >
      <div className={`${styles["container"]}`}>
        <div className={`${styles["days-hours"]}`}>
          <div className={`${styles["container-segment"]}`}>
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
            <div className={`${styles["segment-title"]} fw-bold mt-2`}>
              Hari
            </div>
          </div>
          <div className={`${styles["container-segment"]}`}>
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
            <div className={`${styles["segment-title"]} fw-bold mt-2 `}>
              Jam
            </div>
          </div>
          <div className={`${styles["container-segment"]}`}>
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
            <div className={`${styles["segment-title"]} fw-bold mt-2`}>
              Menit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
