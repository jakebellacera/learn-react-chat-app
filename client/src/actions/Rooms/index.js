// Changes the current room to the new room
export const joinRoom = (room) => ({
  type: 'JOIN_ROOM',
  room
});

// Adds a room to the room list
export const addRoom = (room) => ({
  type: 'ADD_ROOM',
  room
});
