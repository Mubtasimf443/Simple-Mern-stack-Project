 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */


import React from 'react'


export const InputBox = ({ ref ,labal ,id}) => {
  return (
    <div className='input_box'>
      <label htmlFor={id}>{labal}</label>
      <input id={id} type="text" ref={ref} />
    </div>
  )
}












