async function handleConnection() {
  const connection = await io.connect(
    'http://localhost:1221',
    {
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 10000,
      withCredentials: true,
    },
  );

  connection.on(
    'connect',
    () => {
      $('#after-connection').empty().append(`
<button
  id="emit"
  type="button"
>
  Emit PING
</button>
      `);
      $('#emit').on('click', () => connection.emit('PING'));

      connection.on('PONG', (data) => $('#after-connection').append(`
<div style="margin-top: 16px">
  Received UID: ${data.UID}
</div>      
      `));
    },
  );
}

function Index() {
  $('#root').empty().append(`
<h1>Node Websockets ALS example</h1>
<div id="content">
  <button
    id="connect-ws"
    type="button"
  >
    Connect to Websockets server
  </button>
  <div id="after-connection"></div>
</div>
  `);

  $('#connect-ws').on('click', () => handleConnection());
}

$(document).ready(() => {
  Index();
});
