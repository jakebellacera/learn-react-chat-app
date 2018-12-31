import * as actions from '.';

describe('message actions', () => {
  it('should create an action to add a message', () => {
    const username = 'foobar';
    const body = 'Sup dawg';
    const now = Date.now();
    jest.spyOn(Date, 'now').mockImplementation(() => now)

    expect(actions.addMessage(username, body)).toEqual({
      type: 'ADD_MESSAGE',
      username,
      body,
      createdAt: now
    });
  })
});
