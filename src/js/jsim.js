let jsim = [];
jsim.env = {
    "tick": {
        "clock": "",
        "interval": 1000,
        "min": 10       
    },
    "sandbox": false,
    "tickCount": 0
};

function dummy() { console.log('[ JSIM ]   Dummy function, arguments: ' + arguments)}

jsim.start = function() {
    console.log('[ JSIM ]   Started simulation')
    jsim.env.tick.clock = setInterval(dummy, jsim.env.tick.interval, arguments);
}

jsim.stop = function () {
    console.log('[ JSIM ]   Stopped simulation')
    clearInterval(jsim.env.tick.clock);
};

jsim.setTickSpeed = function(interval) {
    if (interval > jsim.env.tick.min) { jsim.env.tick.interval = interval; return};
    jsim.tick.interval = jsim.env.tick.min;
}

jsim.reload = function() {
    location.reload()
}

// Importing the correct simulator
jsim.init = function () {
    const params = (new URL(document.location)).searchParams;
    if (params.get('sandbox') === 'true') { console.log('[ JSIM ]   Booted in sandbox mode'); jsim.sandbox = true; return }
    const name = params.get('simulator');
    const source = params.get('source');
    if (name === null || source === null) { window.location.replace('launcher.html') }
    console.log('[ JSIM ]   Booted with ' + name + ' from ' + source)
    let script = document.createElement('script');
    script.setAttribute('src', 'simulators/' + name + '/' + source)
    document.head.appendChild(script)
}
jsim.init()