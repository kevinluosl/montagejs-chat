/**
 * Created by peter on 2014/12/9.
 */

var Montage = require("montage/core/core").Montage;
    //socket = require("./socket.io");

exports.ChatService = Montage.specialize({
    _isConnected:{
        value:false
    },

    _socket:{
      value:null
    },

    serverUrl:{
        set:function(val){
            if(val){
                this._socket = io.connect(val);
                this._serverUrl = val;
            }
        },
        get:function(val){
            return this._serverUrl;
        }
    },

    _messageHandler:{
        value:null
    },

    constructor:{
        value:function ChatService(serverUrl, messageHandler){
            this.serverUrl = serverUrl;
            this._messageHandler = messageHandler;
            this.addPathChangeListener("_socket", this, "handleSocketChange");
        }
    },

    handleSocketChange:{
        value:function(){
            this._initSocket();
        }
    },

    connectToRoom:{
        value:function(room){
            roomAddr = "http://" + room.host + ":" + room.port;
            this._initRoom(roomAddr);
        }
    },

    _initRoom:{
        value:function(roomAddr){
            var self = this;
            this._socket = io.connect(roomAddr);
            this._socket.on('open', function(roomList){
                self._isConnected = true;
                self._socket.emit('userlist');
            });

            this._socket.on('userlist', function(userList){
                self.userList = userList;
                if(self.userList)
                    self._messageHandler.handleUserListChange(self.userList);
            });

            this._socket.on('message', function(message){
                self.userMessage = message;
                if(self.userMessage)
                    self._messageHandler.handleUserMessageIncome(self.userMessage);

            });

            this._socket.on('system', function(message){
                self.systemMessage = message;
                if(self.systemMessage)
                    self._messageHandler.handleUserMessageIncome(self.systemMessage);
            });
        }
    },

    _initSocket:{
        value:function(){
            this.addPathChangeListener( "exceptionMessage", this._messageHandler, "handleExceptionChange" );
            var self = this;
            this._socket.on('open', function(roomList){
                self.roomList = roomList;
                if(self.roomList)
                    self._messageHandler.handleRoomListChange(self.roomList);
                self._socket.disconnect();
            });
        }
    },

    roomList:{
        value:null
    },

    userList:{
        value:null
    },

    userMessage:{
        value:null
    },

    systemMessage:{
        value:null
    },

    exceptionMessage:{
        value:null
    },

    getRoomList:function(handler){
        this._socket.on('roomlist',function(roomList){
            handler(roomList);
        })  ;
    },

    sendMessage:{
        value:function(msg){
            if(!this._isConnected)
            {
                this.exceptionMessage= {
                    id:101,
                    module:'sendMessage',
                    message:'The socket is disconnected now. Please re-connect to server first'
                };
                this._messageHandler.handleExceptionChange(this.exceptionMessage);
                return;
            }

            this._socket.send(msg);
        }
    }
});
