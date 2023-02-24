import React from 'react'
import errorIcon from './../assets/images/error.svg'

export default function TranslationError() {
  return (
    <div className='dictionary dictionary--error'>
        <img src={errorIcon} className='dictionary__error-icon' alt='error-icon'></img>
        <h2 className='dictionary__error-name'>No Definitions Found</h2>
        <p className='dictionary__error-description'>
            Sorry pal, we couldn't find definitions for the word you were looking for. 
            You can try the search again at later time or head to the web instead.
        </p>
    </div>
  )
}
