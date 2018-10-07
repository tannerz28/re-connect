
import { Event } from '../constants'
import * as socketio from 'socket.io'

let io: socketio.Server

export function initSocketServer (server: socketio.Server) {
  io = server

  io.on('connection', socket => {
    socket.emit(Event.Connect)
  })
}

export function getSocketServer () {
  return io
}
