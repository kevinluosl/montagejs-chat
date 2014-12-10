/**
 * @module ui/register.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Register
 * @extends Component
 */
exports.Register = Component.specialize(/** @lends Register# */ {
    constructor: {
        value: function Register() {
            this.super();
        }
    },
    handleAction: {
        value: function() {
           this.element.remove();
            this.parentComponent.templateObjects.postMessage.element.style.display = "-webkit-box";
            var ms = this.templateObjects.userName.value;
            this.parentComponent.chatService.sendMessage(ms);
            console.log("Fallback action handler invoked as there is no specific handler for this button");
        }
    }
});
