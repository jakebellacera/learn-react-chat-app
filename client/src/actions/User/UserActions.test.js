import * as actions from '.';
import { executionAsyncId } from 'async_hooks';

describe('user action creators', () => {
  it('should handle IDENTIFY_USER', () => {
    const username = 'foobar';
    expect(actions.identifyUser(username)).toEqual({
      type: 'IDENTIFY_USER',
      username
    });
  });
});
