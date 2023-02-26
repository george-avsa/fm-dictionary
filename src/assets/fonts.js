const SansSerif = `
    html * {
        font-family: 'Inter';
    }
`

const Serif = `
    html * {
        font-family: 'Lora';
    }
`

const Mono = `
    html * {
        font-family: 'Inconsolata';
    }
`

export const getFontStyle = (fontArray) => {
    const [activeFont, _] = fontArray;

    if (activeFont === 'Serif') {
        return Serif
    }

    if (activeFont === 'Mono') {
        return Mono
    }

    return SansSerif;

}