import React, { useState, useRef } from "react";
import Modal from "./Modal";

const TimerChallenge = ({ title, targetTime }) => {
   const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
   let timerRef = useRef()
   let modalRef = useRef()
   const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000
   const handleStart = () => {
      timerRef.current = setInterval(() => {
         setTimeRemaining(prevState => prevState - 10)
      }, 10);
   }

   const resetTimer = () => setTimeRemaining(targetTime * 1000)


   if (timeRemaining <= 0) {
      clearInterval(timerRef.current)
      modalRef.current.showModal()
   }


   const handleStop = () => {
      clearInterval(timerRef.current)
      modalRef.current.showModal()
   }

   return <>
      <Modal targetTime={targetTime} ref={modalRef} timeRemaining={timeRemaining} onReset={resetTimer} />
      <section className="challenge">
         <h2>{title}</h2>
         <p className="challege-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
         <button type="button" onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'}</button>
         <p className={timerIsActive ? 'active' : ''}>{timerIsActive ? 'Timer is running' : ''}</p>
      </section>
   </>
}

export default TimerChallenge