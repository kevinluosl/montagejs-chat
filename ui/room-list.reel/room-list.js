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
				"room_name":"Room1",
				"room_icon": "/assets/room.png"
				},
                {
				"room_name":"Room2",
				"room_icon": "/assets/room.png"
				}
            ];
        }
    }
});
