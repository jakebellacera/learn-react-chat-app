export const postMessage = (room, username, body) => ({
  fetch: `/api/${room}/messages`,
  fetchOptions: {
    method: 'POST',
    body: JSON.stringify({ room, username, body })
  }
});

export const addMessage = (room, username, body, createdAt) => ({
  type: 'ADD_MESSAGE',
  room,
  username,
  body,
  createdAt
});

export const subscribeToMessages = () => dispatch => {
  dispatch({
    event: 'message',
    handle: (result) => {
      const {room, username, body, created_at} = JSON.parse(result);
      dispatch(addMessage(room, username, body, created_at));
    }
  });
};
