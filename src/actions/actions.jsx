export const setMobile = (state) => ({
    type: 'SET_MOBILE',
    payload: state,
});

export const updateSplashScreenFader = (element, value) => ({
  type: 'UPDATE_SPLASH_SCREEN_FADER',
  payload: { element, value },
});

export const setSplashScreenPositionModifier = (state) => ({
  type: 'SET_SPLASH_SCREEN_POSITION_MODIFIER',
  payload: state,
});

export const setNavbarFader = (element, value) => ({
  type: 'SET_NAVBAR_FADER',
  payload: { element, value },
});

export const setActiveView = (state) => ({
  type: 'SET_ACTIVE_VIEW',
  payload: state,
});