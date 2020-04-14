export const state = () => ({
  navItemIndex: 0,
  transitionType: "slide-right"
});

export const mutations = {
  UPDATE_NAV_INDEX(state, payload) {
    state.navItemIndex = payload;
  },
  UPDATE_TRANSITION(state, payload) {
    state.transitionType = payload;
  }
};
