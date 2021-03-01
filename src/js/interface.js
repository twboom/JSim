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
};

/* INIT */

jsim.interface.init = function() {
    document.querySelector('#tickspeedDisplay').innerHTML = jsim.env.tick.interval;
    document.querySelector('#tickCount').innerHTML = jsim.env.tickCount;
}

jsim.interface.init()