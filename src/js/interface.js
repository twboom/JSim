jsim.interface = [];

/* CONTROL PANEL */

jsim.interface.update = function(field, value) {
    field.innerHTML = value;
    jsim.console.log('Updated ' + field.id + ' to ' + value, 'JSIM', 'InterfaceHandeler');
}

jsim.interface.setTickspeed = function() {
    const interval = prompt('Enter new tickspeed', jsim.env.tick.clock);
    if (interval === '' || isNaN(interval) === true) {jsim.console.log('New interval was not set, interval was not an interger', 'JSIM', 'InterfaceHandeler'); return }
    else {
        jsim.interface.update(document.querySelector('span#tickspeedDisplay'), interval);
        jsim.setTickSpeed(interval);
    }
};

/* CONSOLE */
jsim.console = [];

jsim.console.log = function(value, programIn, origin) {
    if (origin === undefined) { origin = ''; }
    if (programIn === undefined) { programIn = '' }
    const program = programIn.toUpperCase();
    const content = '[ ' + program + ' ] ' + origin + ' :: ' + value;
    console.log(content);
    let newOutput = document.createElement('p');
    newOutput.setAttribute('id', 'consoleLine')
    newOutput.innerHTML = content
    document.querySelector('#consoleField').appendChild(newOutput)
    const consoleDiv = document.getElementById("console");
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
};

/* SHELL */
jsim.shell = [];

jsim.shell.log = function(value, origin) {
    if (origin === undefined) { origin = ''; }
    const program = jsim.env.simulator.toUpperCase();
    const content = '[ ' + program + ' ] ' + origin + ' :: ' + value;
    console.log(content);
    let newOutput = document.createElement('p');
    newOutput.setAttribute('id', 'shellLine')
    newOutput.innerHTML = content
    document.querySelector('#shellField').appendChild(newOutput)  
    const shellDiv = document.getElementById("shell");
    shellDiv.scrollTop = shellDiv.scrollHeight;
}

/* INIT */

jsim.interface.init = function() {
    document.querySelector('#tickspeedDisplay').innerHTML = jsim.env.tick.interval;
    document.querySelector('#tickCount').innerHTML = jsim.env.tickCount;
}

document.querySelector('#startButton').addEventListener('click', function() { if (jsim.env.active === false) { jsim.start() }})
document.querySelector('#stopButton').addEventListener('click', function() { if (jsim.env.active === true) { jsim.stop() }})
document.querySelector('#setTickspeed').addEventListener('click', jsim.interface.setTickspeed)
document.querySelector('#reload').addEventListener('click', jsim.reload)