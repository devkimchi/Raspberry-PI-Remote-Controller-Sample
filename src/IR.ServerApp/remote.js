let lirc_node = require('lirc_node');

lirc_node.init();

const remote = (device, command) => {
    lirc_node.irsend.send_once(device, command, () => {
        console.log(command);
    });
}

const remoteControl = {
    onSwitchOn: (device) => {
        remote(device, "SWITCH_ON");
    },

    onSwitchOff: (device) => {
        remote(device, "SWITCH_OFF");
    }
}

module.exports = remoteControl;
