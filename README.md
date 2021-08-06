## node-ws-als

Testing [AsyncLocalStorage](https://nodejs.org/api/async_context.html#async_context_class_asynclocalstorage) with [Socket.IO](https://socket.io)

[Store](./store.js) is initialized in the [middleware](./middleware.js), and then accessed in [router](./router.js).

Accessing the [store](./store.js) directly in [handler](./handler.js) is not possible, data should be passed as an argument.

### Deploy

```shell script
git clone https://github.com/peterdee/node-ws-als
cd ./node-ws-als
nvm use 16
npm i
```

### Launch

```shell script
npm start
```

Backend will be running on http://localhost:1221

Frontend will be runnung on http://localhost:2112

### License

[MIT](./LICENSE.md)
