var sim = {
    "tick": {
        "clock": "",
        "interval": 10,        
    }
}

function simulator(args) {
    
    if (args == undefined) { return 'No arguments given' }
    let command = args.split(/ + /g);
    

    switch(command[0]) {
        case 'start':
            start()
            break;

        case 'stop':
            stop()
            break;

        case 'setTickSpeed':
            setTickSpeed(command[1])
            break

        default:
            return 'No command';
    };


    function start() {
        sim.tick.clock = setInterval(console.log, sim.tick.interval, 'hello');
    }

    function stop() {
        clearInterval(sim.tick.clock)
    }

    function setTickSpeed(interval) {
        if (interval > 0) { sim.tick.interval = parseInt(interval) }
        else { sim.tick.interval = 10; return 'Interval too low, set to 10 miliseconds'}
    }
}