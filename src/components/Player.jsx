import React, {useState, useRef} from "react";

const Player = () => {
   const nameRef = useRef('')
   const [playerName, setPlayerName] = useState(null)
   const handleClick = () => setPlayerName(nameRef.current.value.trim())

   return <section id="player">
      <h2>Welcome {playerName ? playerName : 'Unknown Player'}</h2>
      <p>
         <input type="text" ref={nameRef} />
         <button type="button" onClick={handleClick}>Set Name</button>
      </p>
   </section>
}

export default Player