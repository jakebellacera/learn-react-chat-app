import reducer from '.';
import * as actions from '../../actions';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_MESSAGE', () => {
    const username = 'foobar';
    const body = 'Sup dawg';
    const now = Date.now();
    jest.spyOn(Date, 'now').mockImplementation(() => now)
    const action = actions.addMessage(username, body);

    expect(reducer(undefined, action)).toEqual([
      {
        username,
        body,
        createdAt: now
      }
    ]);
  });
});
