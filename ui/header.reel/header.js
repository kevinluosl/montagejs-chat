/**
 * @module ui/header.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Header
 * @extends Component
 */
exports.Header = Component.specialize(/** @lends Header# */ {
    constructor: {
        value: function Header() {
            this.super();
        }
    },
	_toggleRoomList:{value:false},
	toggleRoomList:{
		set:function(v){
		    debugger;
			this._toggleRoomList = v;
		},
		get:function(){
			return this._toggleRoomList;
		}
	},
	 handleLeftAction: {
        value: function() {
			var cls = 'hide';
			var obj = this.parentComponent.templateObjects.roomList.element;
			if ( obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')) ) {
				 var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
				obj.className = obj.className.replace(reg, ' '); 
			}else{
				obj.className += " " + cls; 
			}
			 
            console.log("Button - clickMe - action");
        }
    },
	 handleRightAction: {
        value: function() {
			var cls = 'hide';
			var obj = this.parentComponent.templateObjects.userList.element;
			if ( obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')) ) {
				 var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
				obj.className = obj.className.replace(reg, ' '); 
			}else{
				obj.className += " " + cls; 
			}
        }
    }
});
