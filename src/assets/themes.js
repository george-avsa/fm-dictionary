export const darkTheme = `
.App {  
    background-color: #050505;
}

.App * {
  color: #FFFFFF;
}

.font-switcher__dropdown {
  background-color: #1F1F1F;
  box-shadow: 0px 5px 30px #A445ED;
}

.settings__divider {
  background-color: #E9E9E9;
}

.theme-switcher {
  background-color: #A445ED;
}

.theme-switcher__circle {
  background-color: #fff;
}

form.search * {
  border: 0px solid black;
}

.search__input {
  background: #1F1F1F;  
  color: #fff;
}

.search__input--error {
  outline: 1px solid #FF5252;
}

.search__text-error {
  color: #FF5252;
}

.search__input:focus {
  outline: 2px solid #A445ED;
}

.search__input--error:focus {
  outline: 2px solid #FF5252;
}

.search__button {
  background-color: #1F1F1F;
}


.dictionary__error-name, .dictionary__start-name {
  color: #fff;
}

.theme img {
  filter: invert(32%) sepia(97%) saturate(2043%) hue-rotate(254deg) brightness(93%) contrast(99%);
}

.dictionary__arrow {
  filter: invert(100%) sepia(0%) saturate(7449%) hue-rotate(144deg) brightness(107%) contrast(105%);;
}

.dictionary__error-description {
  color: #757575;
}

.dictionary__word {
  color: #FFF;
}

.dictionary__transription {
  color: #A445ED;
}

.word-type__name {
  color: #fff;
}

.word-type__divider {
  background: #3A3A3A;
}

.word-meaning__title {
  color: #757575;
}

.word-meaning__item {
  color: #FFF;
}

.word-source__divider {
  background: #E9E9E9;
}

.word-source__name {
  color: #757575;
}

.word-source__url {
  color: #fff;
}
`;

export const lightTheme = `
.App {  
    background-color: #fff;
}

.App * {
    color: #000;
}

.font-switcher__dropdown {
  background-color: #fff;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
}

.dictionary__arrow {
    filter: invert(0%) sepia(5%) saturate(35%) hue-rotate(134deg) brightness(103%) contrast(99%);
}

.theme img {
    filter: invert(53%) sepia(4%) saturate(7%) hue-rotate(317deg) brightness(84%) contrast(90%);
}

.settings__divider {
  background-color: #E9E9E9;
}

.theme-switcher {
  background-color: #757575;
}

.theme-switcher__circle {
  background-color: #fff;
}

form.search * {
  border: 0px solid black;
}

.search__input {
  background: #F4F4F4;  
  color: #2D2D2D;
}

.search__input--error {
  outline: 1px solid #FF5252;
}

.search__text-error {
  color: #FF5252;
}

.search__input:focus {
  outline: 1px solid #A445ED;
}

.search__input--error:focus {
  outline: 1px solid #FF5252;
}

.search__button {
  background-color: #F4F4F4;
}


.dictionary__error-name, .dictionary__start-name {
  color: #2D2D2D;
}

.dictionary__error-description {
  color: #757575;
}

.dictionary__word {
  color: #2D2D2D;
}

.dictionary__transription {
  color: #A445ED;
}

.word-type__name {
  color: #2D2D2D;
}

.word-type__divider {
  background: #E9E9E9;
}

.word-meaning__title {
  color: #757575;
}

.word-meaning__item {
  color: #2D2D2D;
}

.word-source__divider {
  background: #E9E9E9;
}

.word-source__name {
  color: #757575;
}

.word-source__url {
  color: #2D2D2D;
}
` 