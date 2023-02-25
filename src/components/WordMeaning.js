import React from 'react'

export default function WordMeaning({meaning}) {

    console.log(meaning)
    const definitions = meaning?.definitions;
    console.log(meaning?.definitions)

  return (
    <div className='word-meaning'>
        <div className='word-meaning__title'>Meaning</div>
        <ul className='word-meaning__list' type='disc'>
            {definitions.map((definitionArray) => (
                <li className='word-meaning__item'>
                    {definitionArray.definition}
                </li>
            ))}
        </ul>
    </div>
  )
}
