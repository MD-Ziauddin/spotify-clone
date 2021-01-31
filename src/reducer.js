export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   'BQDdov4aNNlmmc1Ubb_ej8QErbZkKIVlClmwJc_6k7ovlO1aKgRUbzMnuv73htcozmPb1pOvQuRXD-EQ0xNU9nSzvWZgSrMm_ZLsvRiQWNEDBbJtmpB36lK5mgpQ0wx8PDkoxzrEySwgfDQxmVx-HLjT4-CtaV80fOIYVqQZi5g5mZW2BVCc',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
