const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'FETCH_PERSON') {
    if (state.person) {
      const { name } = state.person;
      return {
        ...state,
        loading: false,
        person: action.payload,
        title: name,
        value: 'name',
      };
    } else {
      return {
        ...state,
        loading: false,
        person: action.payload,
      };
    }
  }
  if (action.type === 'CHANGE_VALUES') {
    return {
      ...state,
      value: action.payload,
      title: state.person[action.payload],
    };
  }
  throw new Error('there is no such action type');
};

export default reducer;
