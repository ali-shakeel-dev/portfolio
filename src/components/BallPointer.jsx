import React, { useState, useEffect, useRef } from 'react';
import './BallPointer.css';

const Ball = () => {
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const timer = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setBallPosition({ x: event.clientX, y: event.clientY });
            setIsDragging(true);

            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                setIsDragging(false);
            }, 100); // Time in ms to wait before considering the mouse stopped
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className={`ball ${isDragging ? 'dragging' : ''}`}
            style={{ left: `${ballPosition.x}px`, top: `${ballPosition.y}px` }}
        />
    );
};

export default Ball;
