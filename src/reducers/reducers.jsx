const initialState = {
    isMobile: false,
    theme: {
        black: '#061d26',
        white: '#e8edef',
        grey: '#878787',
        primary: '#1D569D',
        secondary: '#268EB9',
        tertiary: '#eaeaea'
    },
    splashScreenFader: {
        image: false,
        name: false,
        button: false
    },
    navbarFader: {
        image: false,
        home: false,
        work: false,
        references: false
    },
    splashScreenPositionModifier: 0,
    activeView: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOBILE':
            return {
                ...state,
                isMobile: action.payload,
            };
        case 'UPDATE_SPLASH_SCREEN_FADER':
            return {
                ...state,
                splashScreenFader: {
                    ...state.splashScreenFader,
                    [action.payload.element]: action.payload.value,
                },
            };
        case 'SET_NAVBAR_FADER':  
            return {
                ...state,
                navbarFader: {  
                    ...state.navbarFader,
                    [action.payload.element]: action.payload.value,
                },
            };
        case 'SET_SPLASH_SCREEN_POSITION_MODIFIER':
            return {
                ...state,
                splashScreenPositionModifier: action.payload,
            };
        case 'SET_ACTIVE_VIEW':
            return {
                ...state,
                activeView: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
