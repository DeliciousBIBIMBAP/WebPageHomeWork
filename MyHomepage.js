function updateTime() {
    let now= new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.getElementById('time').textContent = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

    setInterval(updateTime, 1000);
}
updateTime();