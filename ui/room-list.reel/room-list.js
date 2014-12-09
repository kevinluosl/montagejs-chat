/**
 * @module ui/room-list.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class RoomList
 * @extends Component
 */
exports.RoomList = Component.specialize(/** @lends RoomList# */ {
    constructor: {
        value: function RoomList() {
            this.super();
        }
    },
	templateDidLoad: {
        value: function() {
            var rangeController = this.templateObjects.rangeController;
            
            rangeController.content = [
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
				}
            ];
        }
    }
});
