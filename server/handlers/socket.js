'use strict';

const io = require('socket.io-client');

class socketHandler {

    constructor(socketServer) {
        this._socketServer = socketServer;
    };


    /**
     * test emitter
     * @param data to be passed to ML server
     */
    emitTest(data) {

        const socket = io.connect(this._socketServer, {reconnect: true}); //connect socket

        socket.emit('news', data);
    }
 }

 export default socketHandler;