let simulator = [];
simulator.env = {
    "tick": {
        "clock": "",
        "interval": 1000,
        "min": 10       
    }
};

simulator.start = function() {
    simulator.env.tick.clock = setInterval(market, simulator.env.tick.interval, arguments);
}

simulator.stop = function () {
    clearInterval(simulator.env.tick.clock);
};

simulator.setTickSpeed = function(interval) {
    if (interval > simulator.env.tick.min) { simulator.env.tick.interval = interval; return};
    simulator.tick.interval = simulator.env.tick.min;
}

// Importing the correct simulator
simulator.init = function () {
    const params = (new URL(document.location)).searchParams;
    const name = params.get('simulator');
    const source = params.get('source');
    console.log('JSim: Booted with ' + name + ' from ' + source)
    
    let script = document.createElement('script');
    script.setAttribute('src', 'simulators/' + name + '/' + source)
    document.head.appendChild(script)
}

simulator.init()