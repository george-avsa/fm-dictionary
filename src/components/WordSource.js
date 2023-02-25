import sourceIcon from './../assets/images/icon-new-window.svg'
import React from 'react'

export default function WordSource() {
  return (
    <>
        <div className='word-source__divider' />
        <div className='word-source'>
            <div className='word-source__name'>Source</div>
            <a href='#'>
                <div className='word-source__content'>
                    <h3 className='word-source__url'>
                        https://en.wiktionary.org/wiki/keyboard
                    </h3>
                    <img className='word-source__icon' src={sourceIcon} alt='source-icon' />
                </div>
            </a>
        </div>
    </>
  )
}
