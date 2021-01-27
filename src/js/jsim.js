let sim = {
    "tick": {
        "clock": "",
        "interval": 1000,        
    }
};



function simulator() {
    if (arguments == undefined) { return 'No arguments given' }
    

    switch(arguments[0]) {
        case 'start':
            start()
            break;

        case 'stop':
            stop()
            break;

        case 'setTickSpeed':
            setTickSpeed(arguments[1])
            break

        default:
            return 'No command';
    };

    function start() {
        sim.tick.clock = setInterval(market, sim.tick.interval, arguments);
    }

    function stop() {
        clearInterval(sim.tick.clock)
    }

    function setTickSpeed(interval) {
        if (interval > 10) { sim.tick.interval = parseInt(interval) }
        else { sim.tick.interval = 1; console.log('Interval too low, set to 1 ms') }
    }
}