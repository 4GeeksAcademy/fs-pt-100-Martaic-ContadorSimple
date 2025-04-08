import React, { useState, useEffect } from "react";

const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
};

const Contador = ({ start = 0, alertTime = null }) => {
    const [seconds, setSeconds] = useState(start);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds(prev => {
                if (alertTime !== null && prev + 1 === alertTime) {
                    alert(`Se alcanzó el tiempo: ${alertTime} segundos`);
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setSeconds(start);
        setIsRunning(false);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
            <div className="text-center">
                <h1><i className="fa-solid fa-clock"></i> {formatTime(seconds)}</h1>
                <button className="btn btn-success m-2" onClick={handleStart}>Iniciar</button>
                <button className="btn btn-danger m-2" onClick={handleStop}>Detener</button>
                <button className="btn btn-warning m-2" onClick={handleReset}>Reiniciar</button>
            </div>
        </div>
    );
};

export default Contador;