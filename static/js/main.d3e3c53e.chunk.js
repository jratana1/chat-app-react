(this["webpackJsonpchat-app-react"]=this["webpackJsonpchat-app-react"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),r=n.n(s),i=(n(27),n(7)),o=n(0),l=function(){return Object(o.jsx)("div",{className:"Header",children:Object(o.jsx)("h1",{className:"brand",children:Object(o.jsx)("i",{children:"Chat-N-Draw!"})})})},h=(n(29),n.p+"static/media/20200715_112939.5b54978b.jpg"),d=n.p+"static/media/logo.6ce24c58.svg",j=(n(30),n(10)),u=function(){return Object(o.jsxs)("div",{className:"Team",children:[Object(o.jsxs)("div",{className:"Bio",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("strong",{children:"John Ratana"})}),Object(o.jsx)("img",{src:h,alt:"That's ME!",height:"200px"}),Object(o.jsx)("div",{children:"Full-Stack Software Engineer"}),Object(o.jsx)("p",{children:"Ruby, Rails, Javascript, React"}),Object(o.jsxs)("p",{id:"bio",children:["John keeps himself busy with rock climbing, coding, cooking, and raising two children (the 4C's).  Based out of Philadelphia, he is always looking for new opportunities to learn, grow, and work.  You can find him ",Object(o.jsx)("a",{href:"https://www.linkedin.com/in/john-ratana-7aa24063/",children:"here (linkedIn)"}),". Check out his work ",Object(o.jsx)("a",{href:"https://www.linkedin.com/in/john-ratana-7aa24063/",children:"here (Github)"})]})]}),Object(o.jsx)("h1",{children:"Techs"}),Object(o.jsxs)("div",{className:"Techs",children:[Object(o.jsxs)("div",{className:"Techbox",children:[Object(o.jsx)("img",{src:d,alt:"That's ME!",height:"200px",width:"200px"}),Object(o.jsx)("p",{children:"React"})]}),Object(o.jsxs)("div",{className:"Techbox",children:[Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png",alt:"That's ME!",height:"200px",width:"200px"}),Object(o.jsx)("p",{children:"Ruby On Rails"})]})]}),Object(o.jsx)("div",{className:"Shoutout",children:Object(o.jsxs)("h2",{children:["Shoutout to ",Object(o.jsx)("a",{href:"https://mintbean.io/",children:"Mintbean.io"})," for organizing Learn-A-Thons to inspire new developers!"]})})]})},b=function(){return Object(o.jsx)("div",{className:"About",children:Object(o.jsxs)("p",{children:["Chat-N-Draw is a drawing game.  Join the room and log-in to chat.  Choose a drawer.  The drawer submits an answer on the top right input, then start drawing. Everyone in the room can see and guess the image in the chat.  First person to guess correctly wins (winner declared on the top right). Click ",Object(o.jsx)(j.b,{to:"/play",children:"Here"})," to play. to play"]})})},m=function(){return Object(o.jsxs)("div",{className:"Landing",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{})]})},O=n(2),g=n(20),x=n(22),p=n(21),f=n.n(p);var v=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],r=function(t){t.preventDefault(),document.getElementById("winner").style.visibility="hidden",e.chatChannel.answer(a),s("")};return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{value:a,onKeyPress:function(e){var t;"Enter"===(t=e).key&&r(t)},onChange:function(e){s(e.target.value)},type:"text",placeholder:"Enter your drawing here",className:"chat-input"}),Object(o.jsx)("button",{onClick:function(e){return r(e)},className:"send",children:"Submit Answer"})]})};var w=function(e){return Object(o.jsxs)("strong",{className:"winner",id:"winner",style:{visibility:"hidden"},children:[e.winner," is the winner!!!"]})};var y=function(e){var t=e.updateUserName,n=e.userConfirmed,c=e.isUsernameConfirmed,a=e.updateCurrentMessage,s=e.handleSendEvent,r=e.chat,i=e.username,l=e.currentMessage;return Object(o.jsxs)("div",{className:"stage",children:[c?Object(o.jsxs)("h2",{children:["Chatting as : ",i]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{value:i,onChange:function(e){return t(e.target.value)},type:"text",placeholder:"Enter Your Username",className:"username-input",id:"username-input"}),Object(o.jsx)("button",{onClick:function(){return n(!0)},className:"sign-in",children:"Sign-In"})]}),Object(o.jsx)("div",{className:"chat-logs",children:r.map((function(e){return Object(o.jsxs)("div",{className:"listitem",children:[Object(o.jsx)("p",{children:e.username}),Object(o.jsxs)("p",{className:"chat-created-at",children:["(",e.created_at,")"]}),Object(o.jsxs)("p",{className:"chat-message",children:[": ",e.content]})]},"chat_".concat(e.id))}))}),c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{value:l,onKeyPress:function(e){var t;"Enter"===(t=e).key&&s(t)},onChange:function(e){return a(e.target.value)},type:"text",placeholder:"Enter your message...",className:"chat-input"}),Object(o.jsx)("button",{onClick:s,className:"send",children:" Send "})]}):Object(o.jsx)(o.Fragment,{})]})};var N=function(){var e=f.a.createConsumer("wss://chat-n-draw.herokuapp.com/cable"),t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),h=l[0],d=l[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),b=u[0],m=u[1],O=Object(c.useState)(!1),p=Object(i.a)(O,2),N=p[0],C=p[1],k=Object(c.useState)(!1),E=Object(i.a)(k,2),S=E[0],M=E[1],T=Object(c.useState)(""),B=Object(i.a)(T,2),R=B[0],F=B[1];Object(c.useEffect)((function(){document.getElementsByClassName("listitem").length>0&&document.getElementsByClassName("listitem")[document.getElementsByClassName("listitem").length-1].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[h]);var I=Object(c.useMemo)((function(){return e.subscriptions.create({channel:"ChatChannel"},{connected:function(){},received:function(e){if("chat"===e.action&&(d((function(t){return[].concat(Object(x.a)(t),[e])})),"true"===e.winner&&(F(e.username),document.getElementById("winner").style.visibility="visible")),"draw"===e.action&&(document.getElementById("cell-".concat(e.cell)).style.backgroundColor="white"),"clear"===e.action){var t,n=document.getElementsByClassName("grid-item"),c=Object(g.a)(n);try{for(c.s();!(t=c.n()).done;){t.value.style={backgroundColor:"rgb(68, 68, 68)"}}}catch(a){c.e(a)}finally{c.f()}}},create:function(e,t){this.perform("create",{content:e,username:t})},draw:function(e){this.perform("draw",{cell:e})},answer:function(e){this.perform("answer",{answer:e})},clear:function(){this.perform("clear",{action:"clear"})}})}),[]),_=function(e){return Array.from({length:2e3},(function(e,t){return t+1})).map((function(t){return Object(o.jsx)("div",{id:"cell-".concat(2e3*(e-1)+t),className:"grid-item ".concat(2e3*(e-1)+t),onMouseEnter:function(e){return function(e){!0===S&&(e.target.style.backgroundColor="white",I.draw(e.target.id.split("-")[1]))}(e)},onClick:function(e){return function(e){e.target.style.backgroundColor="white",I.draw(e.target.id.split("-")[1])}(e)}},t)}))},D=function(){M(!S)};return Object(o.jsxs)("div",{className:"play",children:[Object(o.jsx)("div",{className:"left-column",children:Object(o.jsx)(y,{updateUserName:function(e){m(e)},userConfirmed:function(e){C(e)},username:b,chat:h,isUsernameConfirmed:N,currentMessage:a,updateCurrentMessage:function(e){s(e)},handleSendEvent:function(){a&&N&&(I.create(a,b),s(""))}})}),Object(o.jsxs)("div",{className:"right-column",style:{backgroundColor:"rgb(250, 0, 0)"},children:[Object(o.jsx)("h3",{children:"Draw Here"}),Object(o.jsx)("button",{onClick:function(e){I.clear()},className:"clear",children:"Clear Canvas"}),Object(o.jsxs)("div",{className:"grid-container",onMouseDown:function(e){return D()},onMouseUp:function(e){return D()},children:[_(1),_(2),_(3),_(4),_(5)]})]}),Object(o.jsxs)("div",{className:"clear",children:[Object(o.jsx)(v,{username:b,chatChannel:I,isUsernameConfirmed:N}),Object(o.jsx)(w,{winner:R})]})]})};var C=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsx)(j.a,{basename:"/",children:Object(o.jsx)("div",{className:"App",children:n?(a(!1),Object(o.jsx)("div",{children:"Loading"})):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"Navbar",children:[Object(o.jsx)("li",{className:"Nav-Item",children:Object(o.jsx)(j.b,{to:"/",children:"About"})}),Object(o.jsx)("li",{className:"Nav-Item",children:Object(o.jsx)(j.b,{to:"/play",children:"Chat-N-Draw"})}),Object(o.jsx)(l,{})]})}),Object(o.jsx)(O.a,{exact:!0,path:"/",children:Object(o.jsx)(m,{})}),Object(o.jsx)(O.a,{exact:!0,path:"/play",children:Object(o.jsx)(N,{})})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),k()}},[[36,1,2]]]);
//# sourceMappingURL=main.d3e3c53e.chunk.js.map