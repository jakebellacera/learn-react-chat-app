import * as actions from '.';

describe('message actions', () => {
  it('should create an action to add a room', () => {
    const room = 'foo';
    expect(actions.addRoom(room)).toEqual({
      type: 'ADD_ROOM',
      room
    });
  });
});
