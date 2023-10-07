import React from 'react'
import Psquare from './Psquare'

function NoPuzzle() {
  return (
    <div className='border border-teal-600 m-0 p-2 bg-[var(--primary-neutral)]'>
      <div className='text-lg'>No Of Moves</div>
      <div className='board flex flex-col'>
        <div className='boardrow w-auto h-auto flex flex-row items-center'>
            <Psquare value='1' onSquareClick='handleclick' />
            <Psquare value='2' />
            <Psquare value='3' />
        </div>

        <div className='boardrow w-auto h-auto flex flex-row items-center'>
            <Psquare value='4' />
            <Psquare value='5' />
            <Psquare value='6' />
        </div>

        <div className='boardrow w-auto h-auto flex flex-row items-centerm '>
            <Psquare value='7' />
            <Psquare value='8' />
            <Psquare />
        </div>
      </div>
    </div>
  )
}

export default NoPuzzle
