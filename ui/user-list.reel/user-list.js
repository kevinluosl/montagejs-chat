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
            /*
            rangeController.content = [
               {
				"user_name":"Tom",
				"user_avatar": "/assets/avatar/p1.jpg"
				},
                {
				"user_name":"Peter",
				"user_avatar": "/assets/avatar/p2.jpg"
				}
            ];*/
        }
    },
    refreshUserList:{value:function(data){
        var rangeController = this.templateObjects.rangeController;
        rangeController.content = [];
        for(var i=0; i < data.length; i++)
       {
           rangeController.content.push({"user_name":data[i],"user_avatar": "/assets/avatar/p1.jpg"});
       }
    }}
});
