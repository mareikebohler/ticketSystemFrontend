import React from 'react'

const LineHeader = ({ woNum, woStatusText, cancelable, reopenable, creationDate }) => {
    const reopen = () =>{
        console.log('Reopen Ticket methode')
    }

    const cancel = () =>{
        console.log('Cancel Ticket methode')
    }
    
    console.log((reopenable) && (woStatusText === 'In Progress'));
    
    return (
        <header className='header'>
            <div className='ticketNumber'>
               Ticketnumber:<b> {woNum}</b>
            </div>
            <div className='ticketCreatedAt'>
                Createt at: <b> {creationDate}</b>
            </div>
            <div className='ticketStatus'>
            <b>{woStatusText}</b>
            </div>
            <div className='ticketActions'>
                <button className='btn' disabled={!(reopenable)} onClick={reopen}>Reopen</button>
                <button className='btn' disabled={!(cancelable)} onClick={cancel}>Cancel</button>
            </div>
        </header>

    )
}

export default LineHeader
