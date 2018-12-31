export const addMessage = (body) => ({
  type: 'ADD_MESSAGE',
  body,
  createdAt: Date.now()
});
