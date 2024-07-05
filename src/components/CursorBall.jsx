import React, { useState, useEffect } from 'react';
import './CursorBall.css';

const CursorBall = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let animationFrameId;

        const updateBallPosition = () => {
            setBallPosition((prevBallPosition) => {
                const dx = position.x - prevBallPosition.x;
                const dy = position.y - prevBallPosition.y;
                return {
                    x: prevBallPosition.x + dx * 0.1,
                    y: prevBallPosition.y + dy * 0.1,
                };
            });

            animationFrameId = requestAnimationFrame(updateBallPosition);
        };

        animationFrameId = requestAnimationFrame(updateBallPosition);

        return () => cancelAnimationFrame(animationFrameId);
    }, [position]);

    return (
        <div
            className="cursor-ball"
            style={{
                left: ballPosition.x + 'px',
                top: ballPosition.y + 'px',
            }}
        />
    );
};

export default CursorBall;
