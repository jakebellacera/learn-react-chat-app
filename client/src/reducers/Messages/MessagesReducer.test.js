import reducer from '.';
import * as actions from '../../actions';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_MESSAGE', () => {
    const room = 'general';
    const username = 'foobar';
    const body = 'Sup dawg';
    const now = Date.now();
    const action = actions.addMessage(room, username, body, now);

    expect(reducer(undefined, action)).toEqual([
      {
        room,
        username,
        body,
        createdAt: now
      }
    ]);
  });
});
