import React from 'react'

function Square({ onSquareClick, value }) {
  return (    
      <input type="button" onClick={onSquareClick} value={value} className='w-[70px] h-[70px] static m-2 p-2 border border-slate-300' />
  )
}

export default Square
