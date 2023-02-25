import React from 'react'
import arrow from './../assets/images/arrow.svg'

export default function TranslationEmpty() {
  return (
    <div className='dictionary dictionary--start'>
        <img src={arrow} alt='arrow' className='dictionary__arrow' />
        <h2 className='dictionary__start-name'>
            Write a word in English
        </h2>
    </div>
  )
}
