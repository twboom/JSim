let jsim = [];
jsim.env = {
    "tick": {
        "clock": "",
        "interval": 500,
        "min": 1       
    },
    "tickTimes": [],
    "sandbox": false,
    "tickCount": 0,
    "interface": true,
    "simulator": '',
    "lastTick": 0,
    "active": false
};

function dummy() {
    jsim.shell.log('Dummy function, arguments: ' + arguments, 'DUMMY', 'Function')
    Math.sin(90 * Math.PI / 180);
    Math.sin(90 * Math.PI / 180);
    Math.sin(90 * Math.PI / 180);
    Math.sin(90 * Math.PI / 180);
}

jsim.start = function() {
    jsim.console.log('Started simulation', 'JSIM', 'SimHandeler');
    jsim.env.active = true;
    jsim.env.tick.clock = setInterval(jsim.tick, jsim.env.tick.interval, arguments);
}

jsim.stop = function () {
    jsim.console.log('Stopped simulation', 'JSIM', 'SimHandeler');
    jsim.env.active = false;
    clearInterval(jsim.env.tick.clock);
};

jsim.setTickSpeed = function(interval) {
    if (interval > jsim.env.tick.min) {
        jsim.env.tick.interval = interval;
        jsim.console.log('Set tickspeed to ' + interval, 'JSIM', 'SimHandeler')
    }
    else {
        jsim.env.tick.interval = jsim.env.tick.min;
        if (jsim.env.interface === true) {
            jsim.interface.update(document.querySelector('span#tickspeedDisplay'), jsim.env.tick.min);
            jsim.console.log('Set tickspeed to ' + jsim.env.tick.min, 'JSIM', 'SimHandeler')
        }
    }
    if (jsim.env.active === true) {
        jsim.stop();
        jsim.start();
        jsim.console.log('Restarted sim to update tickspeed', 'JSIM', 'SimHandeler')
    }
};

jsim.reload = function() {
    location.reload();
};

jsim.tick = function() {
    window[jsim.env.simulator]();
    if (jsim.env.lastTick !== 0) {
        const tickTime = Date.now() - jsim.env.lastTick;
        const difference = jsim.env.tick.interval - tickTime;
        let total = 0;
        for (let i = jsim.env.tickTimes.length - 10; i < jsim.env.tickTimes.length; i++) {
            total += jsim.env.tickTimes[i]
        };
        const avgTickTime = total / 10;
        jsim.env.tickTimes.push(tickTime)
        if (difference > jsim.env.tick.interval / 10) { jsim.console.log('Overloaded, JSIM is running too fast: ' + difference + ' ms too slow', 'JSIM', 'SimHandeler') }
        document.querySelector('#lastTickTime').innerHTML = tickTime;
        if (!isNaN(avgTickTime)) {
            document.querySelector('#avgTickTime').innerHTML = avgTickTime;
        }
    }
    jsim.env.lastTick = Date.now()
    jsim.env.tickCount++;
    document.querySelector('#tickCount').innerHTML = jsim.env.tickCount;
};

// Importing the correct simulator
jsim.init = function () {
    const params = (new URL(document.location)).searchParams;
    if (params.get('sandbox') === 'true') { jsim.console.log('Booted in sandbox mode', 'JSIM', 'BootHandeler'); jsim.env.sandbox = true; jsim.env.simulator = 'dummy'; return }
    const name = params.get('simulator');
    const source = params.get('source');
    if (name === null || source === null) { window.location.replace('launcher.html') }
    jsim.env.simulator = name;
    let script = document.createElement('script');
    script.setAttribute('src', 'simulators/' + name + '/' + source)
    document.head.appendChild(script)
    jsim.console.log('Booted with ' + name + ' from ' + source, 'JSIM', 'BootHandeler')
}
