function attachEventsListeners() {
    let Elements = document.querySelectorAll('div');
    for (const Element of Elements) {
        Element.childNodes[5].addEventListener('click', (e) => {
            let inputElement = Element.childNodes[3];
            if (inputElement.id == 'days'){
                for (const el of Elements) {
                    if(el.childNodes[3].id == 'hours'){
                        el.childNodes[3].value = inputElement.value * 24;
                    } else if(el.childNodes[3].id == 'minutes'){
                        el.childNodes[3].value = inputElement.value * 1440;
                    } else if(el.childNodes[3].id == 'seconds'){
                        el.childNodes[3].value = inputElement.value * 86400;
                    }
                }
            } else if (inputElement.id == 'hours'){
                for (const el of Elements) {
                    if(el.childNodes[3].id == 'days'){
                        el.childNodes[3].value = inputElement.value / 24;
                    } else if(el.childNodes[3].id == 'minutes'){
                        el.childNodes[3].value = inputElement.value * 60;
                    } else if(el.childNodes[3].id == 'seconds'){
                        el.childNodes[3].value = inputElement.value * 3600;
                    }
                }
            } else if (inputElement.id == 'minutes'){
                for (const el of Elements) {
                    if(el.childNodes[3].id == 'days'){
                        el.childNodes[3].value = inputElement.value / 1440;
                    } else if(el.childNodes[3].id == 'hours'){
                        el.childNodes[3].value = inputElement.value / 60;
                    } else if(el.childNodes[3].id == 'seconds'){
                        el.childNodes[3].value = inputElement.value * 60;
                    }
                }
            } else if (inputElement.id == 'seconds'){
                for (const el of Elements) {
                    if(el.childNodes[3].id == 'days'){
                        el.childNodes[3].value = inputElement.value / 86400;
                    } else if(el.childNodes[3].id == 'minutes'){
                        el.childNodes[3].value = inputElement.value / 60;
                    } else if(el.childNodes[3].id == 'hours'){
                        el.childNodes[3].value = inputElement.value / 3600;
                    }
                }
            }
        });
    }
}