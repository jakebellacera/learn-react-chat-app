import * as actions from '.';

describe('room actions', () => {
  it('should create an action to add a message', () => {
    const body = 'Sup dawg';
    const now = Date.now();
    jest.spyOn(Date, 'now').mockImplementation(() => now)

    expect(actions.addMessage(body)).toEqual({
      type: 'ADD_MESSAGE',
      body,
      createdAt: now
    });
  })
});
