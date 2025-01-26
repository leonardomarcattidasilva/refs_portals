import React from "react";
import { createPortal } from 'react-dom'

const Modal = ({ targetTime, ref, timeRemaining, onReset }) => {
   const userlost = timeRemaining <= 0
   const formattedTime = (timeRemaining / 1000).toFixed(2)
   const score = 100 - formattedTime * 100

   return createPortal(
      <dialog className="result-modal" ref={ref} onClose={onReset}>
         <h2>{userlost && 'You lost'}</h2>
         <h2>Your socre is <strong>{userlost ? '0' : score} out of 100</strong></h2>
         <p>The target time was <strong>{targetTime}</strong> seconds.</p>
         <p>You have stopped the timer with {formattedTime} seconds left.</p>

         <form method="dialog" onSubmit={onReset}>
            <button type="submit">Close</button>
         </form>
      </dialog>, document.querySelector('#modal')
   )
}

export default Modal  