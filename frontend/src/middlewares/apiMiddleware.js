const apiMiddleware = store => next => action => {
  if (action.type != 'API') {
    return next(action);
  }

  const { url, method, onSuccess, onFailure } = action.payload;

  fetch(url, { method })
  .then(response => response.json())
  .then(json => store.dispatch({ type: onSuccess, payload: json }))
  .catch(error => store.dispatch({ type: onFailure, payload: error }));
};

export default apiMiddleware;