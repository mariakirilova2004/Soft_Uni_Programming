function attachEvents() {
    let buttonElement = document.getElementById('submit');
    buttonElement.addEventListener('click', () =>{
        let locationElement = document.getElementById('location');
        let forecastElement = document.getElementById('forecast');
        let currentElement = document.getElementById('current');
        let upcomingElement = document.getElementById('upcoming');
        let code;
        let url = 'http://localhost:3030/jsonstore/forecaster/locations';
        fetch(url)
            .then(el => el.json())
            .catch(rez => {
                currentElement.innerHTML = '';
                upcomingElement.innerHTML = '';
                forecastElement.textContent = 'Error';
            })
            .then(rez => {
                forecastElement.textContent = '';
                rez.forEach(city => {
                    if (city['name'] == locationElement.value){
                        code = city['code'];
                    }
                });

                let urlt = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
                fetch(urlt)
                    .then(el => el.json())
                    .then(rez => {
                        currentElement.innerHTML = '<div class="label">Current conditions</div>';
                        upcomingElement.innerHTML = `<div class="label">Three-day forecast</div>`;
                        let divforecast = document.createElement('div');
                        divforecast.classList.add('forecasts');
                        currentElement.appendChild(divforecast);
                        let spanconditionsymbol = document.createElement('div');
                        spanconditionsymbol.classList.add('condition');
                        spanconditionsymbol.classList.add('symbol');
                        switch (rez['forecast']['condition']) {
                            case 'Sunny':
                                spanconditionsymbol.textContent = '☀';
                                break;
                            case 'Partly sunny':
                                spanconditionsymbol.textContent = '⛅';
                                break;
                            case 'Overcast':
                                spanconditionsymbol.textContent = '☁';
                                break;
                            case 'Rain':
                                spanconditionsymbol.textContent = '☂';
                                break;
                        }
                        divforecast.appendChild(spanconditionsymbol);
                        let spancondition = document.createElement('span');
                        spancondition.classList.add('condition');
                        let spanforecastdata = document.createElement('span');
                        spanforecastdata.textContent = rez['name'];
                        let spanforecastdatasecond = document.createElement('span');
                        spanforecastdatasecond.classList.add('forecast-data');
                        spanforecastdatasecond.textContent = `${rez['forecast']['low']}°/${rez['forecast']['high']}°`;
                        let spanforecastdatathird = document.createElement('span');
                        spanforecastdatathird.classList.add('forecast-data');
                        spanforecastdatathird.textContent = `${rez['forecast']['condition']}`;
                        spancondition.appendChild(spanforecastdata);
                        spancondition.appendChild(spanforecastdatasecond);
                        spancondition.appendChild(spanforecastdatathird);
                        divforecast.appendChild(spancondition);
                        currentElement.appendChild(divforecast);
                        forecastElement.appendChild(currentElement);
                        let urlup = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
                fetch(urlup)
                    .then(el => el.json())
                    .then(rez => {
                        let divforecast = document.createElement('div');
                        divforecast.classList.add('forecast-info');
                        upcomingElement.appendChild(divforecast);
                        rez['forecast'].forEach(element => {
                            let spancondition = document.createElement('span');
                            spancondition.classList.add('upcoming');
                            let spanconditionsymbol = document.createElement('div');
                            spanconditionsymbol.classList.add('symbol');
                            switch (element['condition']) {
                                case 'Sunny':
                                    spanconditionsymbol.textContent = '☀';
                                    break;
                                case 'Partly sunny':
                                    spanconditionsymbol.textContent = '⛅';
                                    break;
                                case 'Overcast':
                                    spanconditionsymbol.textContent = '☁';
                                    break;
                                case 'Rain':
                                    spanconditionsymbol.textContent = '☂';
                                    break;
                            }
                            spancondition.appendChild(spanconditionsymbol);
                            let spanforecastdatasecond = document.createElement('span');
                            spanforecastdatasecond.classList.add('forecast-data');
                            spanforecastdatasecond.textContent = `${element['low']}°/${element['high']}°`;
                            let spanforecastdatathird = document.createElement('span');
                            spanforecastdatathird.classList.add('forecast-data');
                            spanforecastdatathird.textContent = `${element['condition']}`;
                            spancondition.appendChild(spanforecastdatasecond);
                            spancondition.appendChild(spanforecastdatathird);
                            divforecast.appendChild(spancondition);
                        });
                        
                        forecastElement.appendChild(upcomingElement);
                        
                        forecastElement.style.display = 'block';
                        })
                    })
            })
            .catch(rez => {
                currentElement.innerHTML = '';
                upcomingElement.innerHTML = '';
                forecastElement.textContent = 'Error';
            })
        })
}

attachEvents();

