import Cable from 'actioncable';
import React, { useEffect, useState, useMemo, Component } from 'react';


function Play() {
      // const cable = Cable.createConsumer('ws://chat-n-draw.herokuapp.com/cable');
  const cable = Cable.createConsumer('ws://localhost:3000/cable');
  const [currentMessage, setcurrentMessage] = useState("")
  const [chat, setChat] = useState([]) 
  const [username, setUsername] = useState(""); 
  const [isUsernameConfirmed, setUsernameConfirmed] = useState(false);
  const [mouseDown, setMouseDown] = useState(false)
  
  useEffect(
    () => {
      if (document.getElementsByClassName("listitem").length>0) {
        document.getElementsByClassName("listitem")[document.getElementsByClassName("listitem").length-1].scrollIntoView()
      }
    }, [chat])

  const chatChannel = useMemo(() => {
    return cable.subscriptions.create(
      { channel: 'ChatChannel' }
      ,  {
      connected: () => {},
      received: (data) => {
        if (data.action === "chat") {
          setChat(oldArray => [...oldArray, data])
        }
        if (data.action === "draw") {
          document.getElementById(`cell-${data.cell}`).style.backgroundColor="white"
        }
      },
      create: function(chatContent, username) {
        this.perform('create', {
          content: chatContent,
          username: username
        });
      },
      draw: function(cell) {
        this.perform('draw', {
          cell: cell,
        });
      }
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
      chatChannel.draw(e.target.id.split("-")[1]);
    }
  }

  const handleClick = (e) => {
    e.target.style.backgroundColor="white"
    chatChannel.draw(e.target.id.split("-")[1]);
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

  const handleClear = () => {
    const nodeItems = document.getElementsByClassName("grid-item");
    for (const c of nodeItems) {
      c.style= {backgroundColor: `rgb(68, 68, 68)`}
    }
  }

  return (
      <>
       <div className="left-column" >
                  
          <div className='stage'>
                  <h1>Chat - Hi!</h1>
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
        <button
            onClick={ (e) => handleClear(e) }
            className='clear'>
            Clear Canvas
        </button>
            <div className="grid-container" onMouseDown={ (e) => handleEvent(e) } onMouseUp={ (e) => handleEvent(e) }>
              {makeGrid(1)}
              {makeGrid(2)}
              {makeGrid(3)}
              {makeGrid(4)}
              {makeGrid(5)}
            </div>
      </div>
      <div className="clear"></div>
      </>
  );
}
 
export default Play;