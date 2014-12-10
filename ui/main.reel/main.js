/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
    ChatService = require("core/service/chat-service").ChatService;
/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
            this.chatListData = [];
            /*
			this.chatListData = [
                {
				"user_name":"Tom",
				"user_avatar": "/assets/avatar/p1.jpg",
				"post_time":"1minutes",
				"message": "Human Resources<script>alert('a')</script>"
				},
                {
				"user_name":"Peter",
				"user_avatar": "/assets/avatar/p2.jpg",
				"post_time":"1minutes",
				"message": "Software Engineering"
				},
                {
				"user_name":"Kevin",
				"user_avatar": "/assets/avatar/p3.jpg",
				"post_time":"1minutes",
				"message": "Hardware Engineering Hardware Engineering Hardware Engineering Hardware Engineering Hardware Engineering"
				},
                {
				"user_name":"Jaon",
				"user_avatar": "/assets/avatar/p1.jpg",
				"post_time":"1minutes",
				"message": "Finance"
				},
                {
				"user_name":"Tom", 
				"user_avatar": "/assets/avatar/p1.jpg",
				"post_time":"1minutes",
				"message": "Information Technology"
				},
				 {
				"user_name":"Tom", 
				"user_avatar": "/assets/avatar/p1.jpg",
				"post_time":"1minutes",
				"message": "Information Technology"
				}, {
				"user_name":"Tom", 
				"user_avatar": "/assets/avatar/p1.jpg",
				"post_time":"1minutes",
				"message": "Information Technology"
				}
            ];*/
        }
    },
    toggleRoomList:{
        value:function(){
            debugger;
        }
    },
    chatService:{
        value:null
    },
    enterDocument:{
        value:function(firstTime){
            if(!this.chatService){
                this.chatService = new ChatService("http://192.168.1.168:31000/", this);
                this.chatService.sendMessage('test');
            }
        }
    },
    handleExceptionChange:{
        value:function(exception){
        }
    },

    handleUserListChange:{
        value:function(userlist){
            this.templateObjects.userList.refreshUserList(userlist);
        }
    },

    handleUserMessageIncome:{
        value:function(usermessage){
            var msg = usermessage.text;
            if ( usermessage.type == 'welcome' ) {
                msg = "Welcome " + msg;
            }
            this.chatListData.push(
                {
                    "user_name":usermessage.author,
                    "post_time":usermessage.time,
                    "message": msg
                });
        }
    },

    handleSystemMessageIncome:{
        value:function(systemmessage){
        }
    }
});
