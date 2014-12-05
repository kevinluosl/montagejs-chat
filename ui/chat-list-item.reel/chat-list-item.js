/**
 * @module ui/chat-list-item.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ChatListItem
 * @extends Component
 */
exports.ChatListItem = Component.specialize(/** @lends ChatListItem# */ {
    constructor: {
        value: function ChatListItem() {
            this.super();
        }
    },
	value:{value:null}
});
