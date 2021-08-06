import cuid from 'cuid';

import store from './store.js';

export default function middleware(socket, next) {
  store.enterWith({ UID: `${cuid.slug()}-${socket.id}` });

  return next();
}
