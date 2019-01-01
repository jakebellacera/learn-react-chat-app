export const postMessage = (username, body) => ({
  fetch: '/api/messages',
  fetchOptions: {
    method: 'POST',
    body: JSON.stringify({ username, body })
  }
});

export const addMessage = (username, body, createdAt) => ({
  type: 'ADD_MESSAGE',
  username,
  body,
  createdAt
});

export const subscribeToMessages = () => dispatch => {
  dispatch({
    event: 'message',
    handle: (result) => {
      const {username, body, created_at} = JSON.parse(result);
      dispatch(addMessage(username, body, created_at));
    }
  });
};
