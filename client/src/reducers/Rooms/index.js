const rooms = (state = ['general'], action) => {
  switch(action.type) {
    case 'ADD_ROOM':
      return [
        ...state,
        action.room
      ].filter((x, i, self) => self.indexOf(x) === i).sort();
    case 'REMOVE_ROOM':
      return state.filter(x => x !== action.room);
    default:
      return state;
  }
};

export default rooms;
