export default function handler(socket, UID) {
  return socket.emit(
    'PONG',
    {
      UID,
    }
  )
}
