import { createServer } from 'http';
import { Server } from 'socket.io';

import middleware from './middleware.js';
import router from './router.js';

const ALLOWED_ORIGINS = ['http://localhost:2112'];
const PORT = Number(process.env.PORT || 1221);

const httpServer = createServer();
const io = new Server(
  httpServer,
  {
    cors: {
      credentials: true,
      origin: ALLOWED_ORIGINS,
    },
  },
);

io.use(middleware);

io.on('connect', router);

httpServer.listen(
  PORT,
  () => console.log(`-- NODE-WS-ALS is running on port ${PORT}`),
);
