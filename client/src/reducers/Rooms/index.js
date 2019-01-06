const rooms = (state = ['general'], action) => {
  switch(action.type) {
    case 'ADD_ROOM':
      return [
        ...state,
        action.room
      ].filter((x, i, self) => self.indexOf(x) === i).sort();
    default:
      return state;
  }
};

export default rooms;
