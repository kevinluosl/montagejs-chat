/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
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
            ];
        },
		toggleRoomList:{
			value:function(){
			debugger;
			}
		}
    }
});
