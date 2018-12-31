const user = (state = {}, action) => {
  switch(action.type) {
    case 'IDENTIFY_USER':
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
};

export default user;
