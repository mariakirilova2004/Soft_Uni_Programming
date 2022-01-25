function focused() {
    let sectionElements = Array.from(document.querySelectorAll('div input'));
    sectionElements.forEach(x => x.addEventListener('click', (e) =>{
        if(e.currentTarget.parentNode.classList.contains('focused')){
            e.currentTarget.parentNode.classList.remove('focused');
        } else{
            sectionElements.forEach(x => x.parentNode.classList.remove('focused'))
            e.currentTarget.parentNode.className = 'focused';
        }
    }));
}
function focused() {
    let mainDiv = document.getElementsByTagName("div")[0];

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("focus", focus);
    });

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("blur", focusLost);
    });

    function focus(e) {
        let parent = e.target.parentNode;
        parent.classList.add("focused");
    }

    function focusLost(e) {
        let parent = e.target.parentNode;
        parent.classList.remove("focused");
    }
}