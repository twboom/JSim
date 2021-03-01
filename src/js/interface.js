jsim.interface = [];

jsim.interface.update = function(field, value) {
    field.innerHTML = value;
    console.log('[ JSIM ]   Updated ' + field.id + ' to ' + value);
}

jsim.interface.setTickspeed = function() {
    const interval = prompt('Enter tickspeed', jsim.env.tick.clock);
    jsim.setTickSpeed(interval);
    jsim.interface.update(document.querySelector('span#tickspeedDisplay'), interval);
};

document.querySelector('#tickspeedDisplay').innerHTML = jsim.env.tick.interval;
document.querySelector('#tickCount').innerHTML = jsim.env.tickCount;