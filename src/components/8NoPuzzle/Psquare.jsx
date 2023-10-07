import React from 'react'

function Psquare({value, onSquareClick}) {
  function handledClick(){
    alert('Button clicked');
  }
  return (
    <button onClick={handledClick} className=' m-1 border  w-20 h-20'>{value}</button>
  )
}

export default Psquare
