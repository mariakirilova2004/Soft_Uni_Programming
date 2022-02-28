function getInfo() {
    let idText = document.getElementById('stopId').value;
        let url = `http://localhost:3030/jsonstore/bus/businfo/${idText}`;
        let busesElement = document.getElementById('buses');
        fetch(url)
            .then(el => el.json())
            .then(rez => {
                idText.value = '';
                let stopNameElement = document.getElementById('stopName');
                stopNameElement.textContent = rez['name'];
                busesElement.innerHTML = '';
                for (const busId in rez['buses']) {
                    if (Object.hasOwnProperty.call(rez['buses'], busId)) {
                        const time = rez['buses'][busId];
                        let liElement = document.createElement('li');
                        liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
                        busesElement.appendChild(liElement);
                    }
                }
            })
            .catch(el =>{
                busesElement.innerHTML = '';
                idText.value = '';
                let stopNameElement = document.getElementById('stopName');
                stopNameElement.textContent = 'Error';
            })
}