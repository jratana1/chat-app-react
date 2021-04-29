import React, { useState } from 'react';

function Answer(props) {
    const [input, setInput] = useState("")

    const updateInput = (event) => {
        setInput(event.target.value);
      }
    
    const handleInputKeyPress = (event) => {
        if(event.key === 'Enter') {
          handleSendEvent(event);
        }
    }

    const handleSendEvent = (event) => {
        event.preventDefault();
 
        // if (!input || !props.isUsernameConfirmed) {
        //   return;
        // }
        document.getElementById("winner").style.visibility = "hidden"
        props.chatChannel.answer(input);
        setInput(
          ''
        );
    }

return (
    <div>
        <input
        value={ input }
        onKeyPress={ (e) => handleInputKeyPress(e) }
        onChange={ (e) => updateInput(e) }
        type='text'
        placeholder='Enter your drawing here'
        className='chat-input' />
        
        <button
        onClick={ (e) => handleSendEvent(e) }
        className='send'>
        Submit Answer
        </button>
    </div>
)
}

export default Answer