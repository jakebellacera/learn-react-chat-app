/**
 * How to use:
 * 
 * Dispatch an action with the 'fetch' property set to a string value.
 *   dispatch({fetch: '/api/foo'});
 * 
 * You can pass an optional callback function to the 'handle' property. The args
 * dispatch and jsonResponse are passed to the function, which can be used to
 * dispatch further actions on success.
 *   dispatch({
 *     path: '/api/messages',
 *     handle: (dispatch, jsonResponse) => {}
 *   });
 * 
 * You can also handle errors with the 'handleError' property:
 *   dispatch({
 *     fetch: '/api/messages',
 *     handle: (dispatch, jsonResponse) => {},
 *     handleError: (dispatch, err) => {}
 *   });
 * 
 * You can also override the default options which are passed to fetch() using
 * the 'fetchOptions' argument.
 *   dispatch({
 *     fetch: '/api/messages',
 *     fetchOptions: {
 *       method: 'POST',
 *       body: JSON.stringify({ foo: 'bar' })
 *     },
 *     handle: (dispatch, jsonResponse) => {}
 *   });
 */

const fetchMiddleware = () => {
  return ({dispatch}) => next => action => {
    if (typeof action === 'function') {
      return next(action);
    }

    const {fetch: url, fetchOptions = {}, handle, handleError, ...rest} = action;

    if (!url || typeof url !== 'string') {
      return next(action);
    }

    const opts = {
      method: 'GET',
      responseType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    };
    
    return fetch(url, opts)
      .then((res) => res.json())
      .then((json) => {
        if (handle) {
          handle(dispatch, json, ...rest)
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        if (handleError) {
          handleError(dispatch, err, ...rest);
        }
      });
  }
};

export default fetchMiddleware;
