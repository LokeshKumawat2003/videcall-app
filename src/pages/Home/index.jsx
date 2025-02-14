import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        if (value.trim()) {
            navigate(`/room/${value}`);
        }
    }, [navigate, value]);

    return (
        <div className="home-container">
            <div className="home-box">
                <h1>Join a Video Call</h1>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter Room Code"
                    className="room-input"
                />
                <button
                    onClick={handleJoinRoom}
                    className="join-button"
                    disabled={!value.trim()}
                >
                    Join
                </button>
            </div>
        </div>
    );
};

export default HomePage;
