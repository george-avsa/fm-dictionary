import React from 'react'
import { useSelector } from 'react-redux'
import { selectStartPage, selectTranslation, selectTranslationError } from '../store/dictionary/dictionary-selectors';
import Translation from './Translation';
import TranslationEmpty from './TranslationEmpty';
import TranslationError from './TranslationError';

export default function Dictionary() {

    const translation = useSelector(selectTranslation);
    const noWord = useSelector(selectStartPage);
    const translationError = useSelector(selectTranslationError)

    if (translationError) {
        return <TranslationError></TranslationError>
    }

    if (noWord) {
        return <TranslationEmpty></TranslationEmpty>
    }
    
    if (translation) {
        return <Translation></Translation>
    }

    return <TranslationError></TranslationError>
}
