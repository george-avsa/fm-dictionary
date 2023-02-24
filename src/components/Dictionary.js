import React from 'react'
import { useSelector } from 'react-redux'
import { selectStartPage, selectTranslation, selectTranslationError } from '../store/dictionary/dictionary-selectors';
import TranslationError from './TranslationError';

export default function Dictionary() {

    const translation = useSelector(selectTranslation);
    const noWord = useSelector(selectStartPage);
    const fetchError = useSelector(selectTranslationError);

    if (fetchError) {
        return <TranslationError></TranslationError>
    } 
}
