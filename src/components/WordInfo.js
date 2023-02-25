import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAudio, selectPhonetic, selectWord } from '../store/dictionary/dictionary-selectors';
import audioIcon from './../assets/images/icon-play.svg'
import audioPlayingIcon from './../assets/images/icon-playing.svg'

export default function WordInfo() {

  const word = useSelector(selectWord);
  const phonetic = useSelector(selectPhonetic);
  const audio = useSelector(selectAudio);

  // const phonetic = props.phonetic

  const audioElement = useRef();
  const [audioPaused, setAudioPaused] = useState(true); 

  const handleAudioPleer = () => {
    audioElement.current.play();
  }

  return (
    <div className='dictionary__word-transription'>
        <div className='dictionary__word-info'>
            <h1 className='dictionary__word'>{word}</h1>
            <h2 className='dictionary__transription'>{phonetic}</h2>
        </div>

          {audio ? <>
            <audio src={audio} ref={audioElement} onPlay={() => setAudioPaused(false)} onPause={() => setAudioPaused(true)}></audio>
            <img className='dictionary__word-audio' alt='word-audio' src={audioPaused ? audioIcon : audioPlayingIcon} onClick={handleAudioPleer} />
          </> : null}
    </div>
  )
}
