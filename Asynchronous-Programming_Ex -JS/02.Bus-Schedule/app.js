function solve() {
    let infoElement = document.getElementById('info');
    let departElement = document.getElementById('depart');
    let arriveElement = document.getElementById('arrive');
    let currentId = 'depot';
    function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${currentId}`;
        fetch(url)
            .then(el => el.json())
            .then(rez =>{
                infoElement.textContent = `Next stop ${rez['name']}`;
                departElement.disabled = true;
                arriveElement.disabled = false;
            })
            .catch(el =>{
                infoElement.textContent = `Error`;
                departElement.disabled = false;
                arriveElement.disabled = false;
            })
    }

    function arrive() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${currentId}`;
        fetch(url)
        .then(el => el.json())
        .then(rez =>{
            infoElement.textContent = `Arriving at ${rez['name']}`;
            arriveElement.disabled = true;
            departElement.disabled = false;
            currentId = rez['next']
        })
        .catch(el =>{
            infoElement.textContent = `Error`;
            departElement.disabled = false;
            arriveElement.disabled = false;
        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();