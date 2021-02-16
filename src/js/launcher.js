let simList;
fetch('data/simulators.json').then(
    function(u){ return u.json();}
  ).then(
    function(json){
      simList = json;
    }
).then(onLoad)

function onLoad() {
    for (let i = 0; i < simList.length; i++) {
        let newOption = document.createElement('input');
        newOption.setAttribute('type', 'radio');
        newOption.setAttribute('name', 'enviroment')
        newOption.setAttribute('value', simList[i].name)
        document.querySelector('#selector').appendChild(newOption)

        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', simList[i].name);
        newLabel.innerHTML = simList[i].name
        document.querySelector('#selector').appendChild(newLabel)
    }
};

function boot() {
    const url = 'jsim.html';

    
    //window.location.replace(url)
};

document.querySelector('#bootButton').addEventListener('click', boot)