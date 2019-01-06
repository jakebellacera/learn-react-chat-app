import * as actions from '.';

describe('message actions', () => {
  it('should create an action to add a room', () => {
    const room = 'foo';
    expect(actions.addRoom(room)).toEqual({
      type: 'ADD_ROOM',
      room
    });
  });

  it('should create an action to remove a room', () => {
    const room = 'foo';
    expect(actions.removeRoom(room)).toEqual({
      type: 'REMOVE_ROOM',
      room
    });
  });
});
