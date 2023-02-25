export const selectTranslation = (state) => state.dictionary.translation;

export const selectStartPage = (state) => state.dictionary.noword;

export const selectTranslationError = (state) => state.dictionary.error;

export const selectWord = (state) => state.dictionary.translation?.word;

export const selectPhonetic = (state) => {
    // API can give phonetic as string and as an array
    // phonetic -> string; phonetics -> array

    const phonetics = state.dictionary.translation?.phonetics;
    
    if (Array.isArray(phonetics)) {
        let phonetic = '';
        
        phonetics.forEach((p) => {
            if (p?.text) {
                phonetic = p.text;
            }
        });

        return phonetic;
    }

    const phonetic = state.dictionary.translation?.phonetic;
    
    if (phonetic) {
        return phonetic
    }

    return '';
}

export const selectAllMeanings = (state) => state.dictionary.translation?.meanings || [];