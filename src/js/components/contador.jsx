import React from "react";

let seconds = 0;
let isRunning = false;
let interval = null;

const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
};

const startCounter = (alertTime, updateUI) => {
    if (isRunning) return;
    isRunning = true;

    interval = setInterval(() => {
        seconds++;
        updateUI();

        if (alertTime !== null && seconds === alertTime) {
            alert(`Se alcanzó el tiempo: ${alertTime} segundos`);
        }
    }, 1000);
};

const stopCounter = () => {
    isRunning = false;
    clearInterval(interval);
};

const resetCounter = (start, updateUI) => {
    stopCounter();
    seconds = start;
    updateUI();
};

const Contador = ({ start = 0, alertTime = null }) => {
    seconds = start;

    const updateUI = () => {
        document.getElementById("time-display").innerText = formatTime(seconds);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
            <div className="text-center">
                <h1><i className="fa-solid fa-clock"></i> <span id="time-display">{formatTime(seconds)}</span></h1>
                <button className="btn btn-success m-2" onClick={() => startCounter(alertTime, updateUI)}>Iniciar</button>
                <button className="btn btn-danger m-2" onClick={stopCounter}>Detener</button>
                <button className="btn btn-warning m-2" onClick={() => resetCounter(start, updateUI)}>Reiniciar</button>
            </div>
        </div>
    );
};

export default Contador;
