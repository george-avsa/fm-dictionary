#[Frontendmentor challenge](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL)

Dictionary app is available at the [link](https://george-avsa.github.io/fm-dictionary/)

To develop this application, I used state manager Redux. I have divided the store into some entities:
  * dictionary - different meanings of words for each part of speech, transcription and audio;
  * settings - the theme of the application, selected font and various error statuses, for example, if the translation is not found.
For each entity were created its own getters, actions and reducers.
