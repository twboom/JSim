let simList;
fetch('data/simulators.json').then(
    function(u){ return u.json();}
  ).then(
    function(json){
      simList = json;
    }
).then(onLoad)

function addOption(name) {
    let newOption = document.createElement('input');
        newOption.setAttribute('type', 'radio');
        newOption.setAttribute('name', 'enviroment')
        newOption.setAttribute('value', name)
        document.querySelector('#selector').appendChild(newOption)

        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', name);
        newLabel.innerHTML = name
        document.querySelector('#selector').appendChild(newLabel)
}

function onLoad() {
    for (let i = 0; i < simList.length; i++) {
        addOption(simList[i].name)
    }
};

function boot() {
    let url = 'jsim.html';
    const selected = document.querySelector('input[name="enviroment"]:checked')
    console.log(selected)

    if (selected == null) {
        alert('Please select a simulator')
        return
    }
    else url += '?simulator=' + selected.value
    if (confirm('JSim will start with the "' + selected.value + '" simulator')) { window.location.replace(url) }
};

document.querySelector('#bootButton').addEventListener('click', boot)