/**
 * @module ui/post-message.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class PostMessage
 * @extends Component
 */
exports.PostMessage = Component.specialize(/** @lends PostMessage# */ {
    constructor: {
        value: function PostMessage() {
            this.super();
        }
    },
    handleAction: {
        value: function() {
            var ms = this.templateObjects.message.value;
            this.parentComponent.chatService.sendMessage(ms);
            console.log("Fallback action handler invoked as there is no specific handler for this button");
        }
    }
});
