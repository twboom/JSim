let jsim = [];
jsim.env = {
    "tick": {
        "clock": "",
        "interval": 1000,
        "min": 10       
    },
    "sandbox": false
};

jsim.start = function() {
    simulator.env.tick.clock = setInterval(market, jsim.env.tick.interval, arguments);
}

jsim.stop = function () {
    clearInterval(jsim.env.tick.clock);
};

jsim.setTickSpeed = function(interval) {
    if (interval > jsim.env.tick.min) { jsim.env.tick.interval = interval; return};
    jsim.tick.interval = jsim.env.tick.min;
}

// Importing the correct simulator
jsim.init = function () {
    const params = (new URL(document.location)).searchParams;
    if (params.get('sandbox') === 'true') { console.log('JSim: Booted in sandbox mode'); jsim.sandbox = true; return}
    const name = params.get('simulator');
    const source = params.get('source');
    if (name === null || source === null) { window.location.replace('launcher.html') }
    console.log('JSim: Booted with ' + name + ' from ' + source)
    let script = document.createElement('script');
    script.setAttribute('src', 'simulators/' + name + '/' + source)
    document.head.appendChild(script)
}
jsim.init()