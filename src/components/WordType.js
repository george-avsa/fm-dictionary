import React from 'react'
import WordMeaning from './WordMeaning'

export default function WordType({meaning}) {
  
  const {
    partOfSpeech
  } = meaning;

  return (
    <div className='word-type'>
      <div className='word-type__head'>
        <h2 className='word-type__name'>{partOfSpeech}</h2>
        <div className='word-type__divider' />
      </div>
      <WordMeaning meaning={meaning}></WordMeaning>
    </div>
  )
}
