import reducer from '.';
import * as actions from '../../actions';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_MESSAGE', () => {
    const body = 'Sup dawg';
    const now = Date.now();
    jest.spyOn(Date, 'now').mockImplementation(() => now)
    const action = actions.addMessage(body);

    expect(reducer(undefined, action)).toEqual([
      {
        body,
        createdAt: now
      }
    ]);
  });
});
