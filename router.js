import handler from './handler.js';
import store from './store.js';

/*
  Store is accessible at the router level.
  However, stor is not accessible inside of a handler.
  Store data should be passed to the handler as an argument.
  Accessing store in the handler will result in an error stating that 
  store is accessed before initialization.
*/
export default function router(socket) {
  const { UID } = store.getStore();
  console.log(`connected ${socket.id} [${UID}]`)

  socket.on('PING', () => handler(socket, UID));
}
