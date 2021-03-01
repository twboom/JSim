let jsim = [];
jsim.env = {
    "tick": {
        "clock": "",
        "interval": 1000,
        "min": 10       
    },
    "sandbox": false,
    "tickCount": 0,
    "interface": true,
    "simulator": ''
};

function dummy() { console.log('[ JSIM ]   Dummy function, arguments: ' + arguments)}

jsim.start = function() {
    console.log('[ JSIM ]   Started simulation')
    jsim.env.tick.clock = setInterval(jsim.tick, jsim.env.tick.interval, arguments);
}

jsim.stop = function () {
    console.log('[ JSIM ]   Stopped simulation')
    clearInterval(jsim.env.tick.clock);
};

jsim.setTickSpeed = function(interval) {
    if (interval > jsim.env.tick.min) { jsim.env.tick.interval = interval; }
    else { jsim.env.tick.interval = jsim.env.tick.min; if (jsim.env.interface === true) { jsim.interface.update(document.querySelector('span#tickspeedDisplay'), jsim.env.tick.min)} }
};

jsim.reload = function() {
    location.reload()
};

jsim.tick = function(simRunFunc) {
    window[jsim.env.simulator]()
    jsim.env.tickCount++;
    document.querySelector('#tickCount').innerHTML = jsim.env.tickCount;
};

// Importing the correct simulator
jsim.init = function () {
    const params = (new URL(document.location)).searchParams;
    if (params.get('sandbox') === 'true') { console.log('[ JSIM ]   Booted in sandbox mode'); jsim.env.sandbox = true; jsim.env.simulator = 'dummy'; return }
    const name = params.get('simulator');
    const source = params.get('source');
    if (name === null || source === null) { window.location.replace('launcher.html') }
    jsim.env.simulator = name;
    let script = document.createElement('script');
    script.setAttribute('src', 'simulators/' + name + '/' + source)
    document.head.appendChild(script)
    console.log('[ JSIM ]   Booted with ' + name + ' from ' + source)
}
jsim.init()