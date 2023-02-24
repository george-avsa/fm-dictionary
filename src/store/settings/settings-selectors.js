export const selectAllFonts = (state) => state.fonts.list;

export const selectActiveFont = (state) => ([
    state.settings.active || 'Sans Serif',
    state.settings.dropdown
]
);

export const selectTheme = (state) => (state.settings.darkTheme);