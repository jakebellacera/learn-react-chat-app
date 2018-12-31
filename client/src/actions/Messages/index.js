export const addMessage = (username, body) => ({
  type: 'ADD_MESSAGE',
  username,
  body,
  createdAt: Date.now()
});
