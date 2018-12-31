import reducer from '.';
import * as actions from '../../actions';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle IDENTIFY_USER', () => {
    const username = 'foobar';
    const action = actions.identifyUser(username);
    expect(reducer(undefined, action)).toEqual({
      username
    });
  });
});
