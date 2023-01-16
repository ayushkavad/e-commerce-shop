export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log('action type:', action.type);
  console.log('action payload:', action.payload);
  console.log('current state:', store.getState());

  next(action);

  console.log('next state:', store.getState());
};
