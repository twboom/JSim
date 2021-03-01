jsim.interface = [];

/* CONTROL PANEL */

jsim.interface.update = function(field, value) {
    field.innerHTML = value;
    console.log('[ JSIM ]   Updated ' + field.id + ' to ' + value);
}

jsim.interface.setTickspeed = function() {
    const interval = prompt('Enter new tickspeed', jsim.env.tick.clock);
    if (interval === '' || isNaN(interval) === true) {console.log('[ JSIM ]   New interval was not set, interval was not an interger'); return }
    else {
        jsim.interface.update(document.querySelector('span#tickspeedDisplay'), interval);
        jsim.setTickSpeed(interval);
    }
};

/* CONSOLE */
jsim.console = [];

jsim.console.log = function(value, origin) {
    if (origin === undefined) { origin = ''; }
    console.log('[ JSIM ] ' + origin + ' :: ' + value)
};

/* INIT */

jsim.interface.init = function() {
    document.querySelector('#tickspeedDisplay').innerHTML = jsim.env.tick.interval;
    document.querySelector('#tickCount').innerHTML = jsim.env.tickCount;
}

jsim.interface.init()