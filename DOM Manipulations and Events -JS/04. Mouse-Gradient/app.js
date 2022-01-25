function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    const gradientMousemoveHandler = (e) =>{
        resultElement.textContent = Math.floor(100 * e.offsetX / e.target.offsetWidth) + '%';
    }
    gradientElement.addEventListener('mousemove', gradientMousemoveHandler);
}