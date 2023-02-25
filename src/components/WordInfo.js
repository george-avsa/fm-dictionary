import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPhonetic, selectWord } from '../store/dictionary/dictionary-selectors';
import audioIcon from './../assets/images/icon-play.svg'

export default function WordInfo(props) {

  const word = useSelector(selectWord);
  const phonetic = useSelector(selectPhonetic);
  const dispatch = useDispatch();

  // const phonetic = props.phonetic

  return (
    <div className='dictionary__word-transription'>
        <div className='dictionary__word-info'>
            <h1 className='dictionary__word'>{word}</h1>
            <h2 className='dictionary__transription'>{phonetic}</h2>
        </div>
        <img className='dictionary__word-audio' alt='word-audio' src={audioIcon} />
    </div>
  )
}
