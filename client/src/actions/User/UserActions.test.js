import * as actions from '.';

describe('user action creators', () => {
  it('should handle IDENTIFY_USER', () => {
    const username = 'foobar';
    expect(actions.identifyUser(username)).toEqual({
      type: 'IDENTIFY_USER',
      username
    });
  });
});
