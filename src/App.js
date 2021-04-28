import React, { useEffect, useState, useMemo, Component } from 'react';
import './App.css';

import Cable from 'actioncable';

function App() {

  const cable = Cable.createConsumer('ws://localhost:3000/cable');

  const [currentMessage, setcurrentMessage] = useState("")
  const [chat, setChat] = useState([]) 
  const [username, setUsername] = useState(""); 
  const [isUsernameConfirmed, setUsernameConfirmed] = useState(false);
  const [mouseDown, setMouseDown] = useState(false)


  const chatChannel = useMemo(() => {
    return cable.subscriptions.create(
      { channel: 'ChatChannel' }
      ,  {
      connected: () => {},
      received: (data) => {
        setChat(oldArray => [...oldArray, data])
      },
      create: function(chatContent, username) {
        this.perform('create', {
          content: chatContent,
          username: username
        });
      }
      // draw: callback
      // word:
    });
  }, []);

  const handleSendEvent = (event) => {
    event.preventDefault();

    if (!currentMessage || !isUsernameConfirmed) {
      return;
    }

    chatChannel.create(currentMessage, username);
    setcurrentMessage(
      ''
    );
  }

  const updateCurrentMessage = (event) => {
    setcurrentMessage(event.target.value);
  }

  const handleChatInputKeyPress = (event) => {
    if(event.key === 'Enter') {
      handleSendEvent(event);
    }
  }

  const updateUserName = (event) => {
    setUsername(event.target.value);
  }

  const handleHover = (e) => {
    if (mouseDown ===true){
      e.target.style.backgroundColor="white"
    }
  }

  const handleClick = (e) => {
    e.target.style.backgroundColor="white"
  }

  const renderChatLog = () => {
    return chat.map((el) => {
      return (
        <li className="listitem" key={`chat_${el.id}`}>
          <p className='chat-message'>{el.username} : { el.content }</p>
          <span className='chat-created-at'>{ el.created_at }</span>
        </li>
      );
    });
  }

  const makeGrid = (n) => {
    const N = 2000;
    const numbers = Array.from({length: N}, (_, index) => index + 1);
    return numbers.map((i) =>
      <div key={i} id={`cell-${(n-1)*2000+i}`} className={`grid-item ${(n-1)*2000+i}`} onMouseEnter={(e)=>handleHover(e)} onClick={(e) => handleClick(e)}></div> 
      );
  }

  const handleEvent = () => {
    setMouseDown(!mouseDown)
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    setUsernameConfirmed(true)
    document.getElementById('username-input').disabled= true
  }


    return (
      <div className='App' >
         <div className="left-column" >
                    
            <div className='stage'>
                    <h1>Chat</h1>
                    <input
                        value={ username }
                        onChange={ (e) => updateUserName(e) }
                        type='text'
                        placeholder='Enter Your Username'
                        className='username-input'
                        id=  'username-input'
                        />
                    <button
                      onClick={ (e) => handleSignIn(e) }
                      className='sign-in'>
                      Sign-In
                    </button>

                    <div className='chat-logs'>
                        <ul className='chat-list'>
                            { renderChatLog() }
                        </ul>
                    </div>
                      <input
                        value={ currentMessage }
                        onKeyPress={ (e) => handleChatInputKeyPress(e) }
                        onChange={ (e) => updateCurrentMessage(e) }
                        type='text'
                        placeholder='Enter your message...'
                        className='chat-input' />
                    <button
                      onClick={ (e) => handleSendEvent(e) }
                      className='send'>
                      Send
                    </button>
                    
             </div>
        </div>
        <div className="right-column" style= {{backgroundColor: `rgb(250, 0, 0)`}}>
          <h3>Draw Here</h3>
              <div className="grid-container" onMouseDown={ (e) => handleEvent(e) } onMouseUp={ (e) => handleEvent(e) }>
                {makeGrid(1)}
                {makeGrid(2)}
                {makeGrid(3)}
                {makeGrid(4)}
                {makeGrid(5)}
              </div>
        </div>
        <div className="clear"></div>
      </div>
    );

}

export default App;

