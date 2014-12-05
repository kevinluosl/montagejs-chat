/**
 * @module ui/chat-list.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ChatList
 * @extends Component
 */
exports.ChatList = Component.specialize(/** @lends ChatList# */ {
    constructor: {
        value: function ChatList() {
            this.super();
			
        }
    },
	_data:{value:false},
	data:{
		set:function(v){
			this._data = v;
		},
		get:function(){
			return this._data;
		}
	},
	templateDidLoad:{
		value:function(){
			var rangeController = this.templateObjects.rangeController;            
            rangeController.content = this.data;
		}
	}
});
