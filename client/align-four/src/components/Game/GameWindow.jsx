import React from 'react';


function GameWindow(board, setBoard , player , setPlayer ) {

    // useEffect(() => {
    //     console.log(board);
    // }, [board])

    // function handleMove(){
    //     board.playerMove(player,0);
    //     setBoard(board);
    //     setPlayer(player === 1 ? 2 : 1);
    // }

    return (
        <div className=' grid grid-cols-7 grid-rows-1 gap-5 w-3/4 h-5/6 bg-blue-700 rounded-xl shadow-xl overflow-hidden '>
            <div className='board-col flex flex-col justify-evenly ' onClick={board.playerMove(0,player)}>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile red"></div>

            </div>
            <div className='board-col flex flex-col justify-evenly '>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>

            </div>
            <div className='board-col flex flex-col justify-evenly '>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>

            </div>
            <div className='board-col flex flex-col justify-evenly '>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>

            </div>
            <div className='board-col flex flex-col justify-evenly '>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>

            </div>
            <div className='board-col flex flex-col justify-evenly '>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>

            </div>
            <div id='six' onClick={(e) => console.log(e)} className='board-col flex flex-col justify-evenly '>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>

            </div>
            
            
            
        </div>
    );
}

export default GameWindow;