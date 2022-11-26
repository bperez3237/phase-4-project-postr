import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function Popup({onClose, Component}) {


    return (
        <div className='popup'>
            <div className='popup-content'>
                <AiOutlineClose size='2.5em' onClick={()=>onClose(false)}/>
                {Component}
            </div>
        </div>
    )
}

export default Popup