import Cable from 'actioncable';

import React, { useEffect, useState, useMemo } from 'react';
import Answer from '../components/answer'
import Winner from '../components/winner'
import Chat from '../components/chat'


function Play() {
      const cable = Cable.createConsumer('wss://chat-n-draw.herokuapp.com/cable');
//   const cable = Cable.createConsumer('ws://localhost:3000/cable');
  const [currentMessage, setcurrentMessage] = useState("")
  const [chat, setChat] = useState([]) 
  const [username, setUsername] = useState(""); 
  const [isUsernameConfirmed, setUsernameConfirmed] = useState(false);
  const [mouseDown, setMouseDown] = useState(false)
  const [winner, setWinner] = useState("")
  
  useEffect(
    () => {
      if (document.getElementsByClassName("listitem").length>0) {
        document.getElementsByClassName("listitem")[document.getElementsByClassName("listitem").length-1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
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
          if (data.winner === "true") {
              setWinner(data.username)
              document.getElementById("winner").style.visibility = "visible"
          }
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
      },
      answer: function(answer) {
          this.perform('answer',{
          answer: answer
        })
      }
    });
  }, []);


  const handleSendEvent = () => {
        if (!currentMessage || !isUsernameConfirmed) { 
          return }
        chatChannel.create(currentMessage, username);
        setcurrentMessage('');
    }

  const updateUserName = (value) => {
    setUsername(value);
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


  const handleClear = () => {
    const nodeItems = document.getElementsByClassName("grid-item");
    for (const c of nodeItems) {
      c.style= {backgroundColor: `rgb(68, 68, 68)`}
    }
  }

  return (
      <div className = "play">
       <div className="left-column" >
          <Chat updateUserName={updateUserName} userConfirmed={(val) => {setUsernameConfirmed(val)}} username={username} chat={chat} isUsernameConfirmed={isUsernameConfirmed} currentMessage={currentMessage} updateCurrentMessage={(val) => {setcurrentMessage(val)}} handleSendEvent={handleSendEvent}/>
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
      <div className="clear">
          <Answer username= {username} chatChannel={chatChannel} isUsernameConfirmed={isUsernameConfirmed}/>
          <Winner winner= { winner }/>
      </div>
      </div>
  );
}
 
export default Play;