import { useState, useEffect } from "react";
// import styles from "./countDown.module.css"; // kurang styling

export default function CountDown() {
  const [count, setCount] = useState({});

  function Timer() {
    useEffect(() => {
      setInterval(function () {
        // Set the date we're counting down to
        var countDownDate = new Date("Aug 30, 2023 23:59:59").getTime();

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        //Function to format number if it is single digit
        let addZeroes = (num) => (num < 10 ? `0${num}` : num);

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element
        if (distance < 0) {
          setCount((previousState) => {
            return {
              ...previousState,
              hari: "00",
              jam: "00",
              menit: "00",
              detik: "00",
            };
          });
        } else {
          setCount((previousState) => {
            return {
              ...previousState,
              hari: addZeroes(days),
              jam: addZeroes(hours),
              menit: addZeroes(minutes),
              detik: addZeroes(seconds),
            };
          });
        }
      }, 1000);
    });
  }
  Timer();
  return (
    // kurang styling, monggo front-end :D
    <div
      className="container text-center"
      style={{ marginTop: "0px", marginBottom: "100px" }}
      data-aos="fade-up"
    >
      <h2>
        Countdown to the 30 August 2023
        <br></br>
        {count.hari} D : {count.jam} H : {count.menit} M : {count.detik} S
      </h2>
    </div>
  );
}
