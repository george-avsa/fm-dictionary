export const RELOAD_TRANSLATION = 'RELOAD_TRANSLATION';
export const THROW_ERROR = 'THROW_ERROR';

export const reloadTranslation = (translation) => ({
    type: RELOAD_TRANSLATION,
    payload: translation
});

export const throwError = () => ({
    type: THROW_ERROR
});

export const getTranslation = (word) => (dispatch) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .then(data => {
            dispatch(reloadTranslation(data[0]))
        })
        .catch(error => {
            dispatch(throwError())
        })
    }
