let simList;
fetch('data/simulators.json').then(
    function(u){ return u.json();}
  ).then(
    function(json){
      simList = json;
    }
).then(onLoad)

function addOption(name, source) {
    let newOption = document.createElement('input');
        newOption.setAttribute('type', 'radio');
        newOption.setAttribute('name', 'enviroment')
        newOption.setAttribute('value', name)
        newOption.setAttribute('source', source)
        document.querySelector('#selector').appendChild(newOption)

        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', name);
        newLabel.innerHTML = name
        document.querySelector('#selector').appendChild(newLabel)
}

function onLoad() {
    for (let i = 0; i < simList.length; i++) {
        addOption(simList[i].name, simList[i].files[0])
    }
};

function boot(sandbox) {
    let url = 'jsim.html';
    if (sandbox === true) {
        url += '?sandbox=true'
        if (confirm('JSIM will start in sandbox mode')) { window.location.replace(url); return }
        else { return }
    };
    const selected = document.querySelector('input[name="enviroment"]:checked')
    if (selected == null) {
        alert('Please select a simulator')
        return
    }
    const source = simList.find( ({ name }) => name == selected.value ).files[0]
    console.log(selected)

    url += '?simulator=' + selected.value
    url += '&source=' + source;
    if (confirm('JSim will start with the "' + selected.value + '" simulator (' + source + ')')) { window.location.replace(url) }
};

function addCustom() {
    const name = document.querySelector('#name')
    const source = document.querySelector('#source')
    const newObject = { "name": name.value, "files": [source.value] }
    console.log(source.value)
    simList.push(newObject)
    addOption(name.value, source.value);
    document.querySelector('#customOption').style.display='none'
};

document.querySelector('#bootButton').addEventListener('click', boot)
document.querySelector('#launchSandbox').addEventListener('click', function() { boot(true) })