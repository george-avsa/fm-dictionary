import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllMeanings, selectTranslation } from '../store/dictionary/dictionary-selectors'
import WordInfo from './WordInfo'
import WordSource from './WordSource'
import WordType from './WordType'

export default function Translation() {

  const meanings = useSelector(selectAllMeanings);
  
  return (
    <div className='dictionary'>
       <WordInfo></WordInfo>
       {meanings.map(meaning => <WordType meaning={meaning}></WordType>)}
       <WordSource></WordSource>
    </div>
  )
}
