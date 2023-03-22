import React from 'react';

function GameWindow() {
    return (
        <div className=' grid grid-cols-3 grid-rows-3 gap-5 w-3/4 h-2/3 bg-white rounded-xl shadow-xl overflow-hidden '>
            <div className='tile '></div>
            <div className='tile '></div>
            <div className='tile '></div>
            <div className='tile '></div>
            <div className='tile '></div>
            <div className='tile '></div>
            <div className='tile '></div>
            <div className='tile '></div>
            <div className='tile '></div>
            
        </div>
    );
}

export default GameWindow;