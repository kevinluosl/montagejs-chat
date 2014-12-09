/**
 * @module ui/user-list.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class UserList
 * @extends Component
 */
exports.UserList = Component.specialize(/** @lends UserList# */ {
    constructor: {
        value: function UserList() {
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
