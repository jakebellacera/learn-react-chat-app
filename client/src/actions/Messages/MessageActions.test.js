import * as actions from '.';

describe('message actions', () => {
  it('should create an action to add a message', () => {
    const room = 'general';
    const username = 'foobar';
    const body = 'Sup dawg';
    const now = Date.now();
    jest.spyOn(Date, 'now').mockImplementation(() => now)

    expect(actions.addMessage(room, username, body, now)).toEqual({
      type: 'ADD_MESSAGE',
      room,
      username,
      body,
      createdAt: now
    });
  })
});
