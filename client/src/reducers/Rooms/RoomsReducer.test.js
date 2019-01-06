import reducer from '.';
import * as actions from '../../actions';

describe('rooms reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      'general'
    ]);
  });

  it('should handle ADD_ROOM and sort room order alphabetically', () => {
    const room = 'foo';
    const action = actions.addRoom(room);
    expect(reducer(undefined, action)).toEqual([
      'general',
      room
    ].sort());
  });
});
