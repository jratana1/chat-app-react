(this["webpackJsonpchat-app-react"]=this["webpackJsonpchat-app-react"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),i=n.n(s),r=(n(27),n(7)),l=n(0),o=function(){return Object(l.jsx)("div",{className:"Header",children:Object(l.jsx)("h1",{className:"brand",children:Object(l.jsx)("i",{children:"Chat-N-Draw!"})})})},d=(n(29),n.p+"static/media/20200715_112939.5b54978b.jpg"),j=n.p+"static/media/logo.6ce24c58.svg",h=(n(30),function(){return Object(l.jsxs)("div",{className:"Team",children:[Object(l.jsxs)("div",{className:"Bio",children:[Object(l.jsx)("h1",{children:Object(l.jsx)("strong",{children:"John Ratana"})}),Object(l.jsx)("img",{src:d,alt:"That's ME!",height:"200px"}),Object(l.jsx)("div",{children:"Full-Stack Software Engineer"}),Object(l.jsx)("p",{children:"Ruby, Rails, Javascript, React"}),Object(l.jsxs)("p",{id:"bio",children:["John keeps himself busy with rock climbing, coding, cooking, and raising two children (the 4C's).  Based out of Philadelphia, he is always looking for new opportunities to learn, grow, and work.  You can find him ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/john-ratana-7aa24063/",children:"here (linkedIn)"}),". Check out his work ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/john-ratana-7aa24063/",children:"here (Github)"})]})]}),Object(l.jsx)("h1",{children:"Techs"}),Object(l.jsxs)("div",{className:"Techs",children:[Object(l.jsxs)("div",{className:"Techbox",children:[Object(l.jsx)("img",{src:j,alt:"That's ME!",height:"200px",width:"200px"}),Object(l.jsx)("p",{children:"React"})]}),Object(l.jsxs)("div",{className:"Techbox",children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png",alt:"That's ME!",height:"200px",width:"200px"}),Object(l.jsx)("p",{children:"Ruby On Rails"})]})]}),Object(l.jsx)("div",{className:"Shoutout",children:Object(l.jsxs)("h2",{children:["Shoutout to ",Object(l.jsx)("a",{href:"https://mintbean.io/",children:"Mintbean.io"})," for organizing Learn-A-Thons to inspire new developers!"]})})]})}),u=function(){return Object(l.jsxs)("div",{className:"About",children:[Object(l.jsx)("p",{children:"MLB Showdown is a collectible trading card game.  Card stats are linked directly to the real life perfomance of the ahtletes.  Collect them all, form your custom roster, and play against other people.  You players will get better (or worse) as the season progresses. Trade with other players and make your best team."}),Object(l.jsx)("p",{children:'Click on "Cards" in the navigation bar to explore the full library of cards.'}),Object(l.jsx)("p",{children:'Click on "Roster" to buy card packs and make your team.'})]})},b=function(){return Object(l.jsxs)("div",{className:"Landing",children:[Object(l.jsx)(u,{}),Object(l.jsx)(h,{})]})},m=n(12),O=n(2),x=n(19),p=n(22),g=n(20),f=n.n(g);var v=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=function(t){t.preventDefault(),document.getElementById("winner").style.visibility="hidden",e.chatChannel.answer(a),s("")};return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:a,onKeyPress:function(e){var t;"Enter"===(t=e).key&&i(t)},onChange:function(e){s(e.target.value)},type:"text",placeholder:"Enter your drawing here",className:"chat-input"}),Object(l.jsx)("button",{onClick:function(e){return i(e)},className:"send",children:"Submit Answer"})]})};var w=function(e){return Object(l.jsxs)("strong",{className:"winner",id:"winner",style:{visibility:"hidden"},children:[e.winner," is the winner!!!"]})};var y=function(){var e=f.a.createConsumer("ws://chat-n-draw.herokuapp.com/cable"),t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)([]),o=Object(r.a)(i,2),d=o[0],j=o[1],h=Object(c.useState)(""),u=Object(r.a)(h,2),b=u[0],m=u[1],O=Object(c.useState)(!1),g=Object(r.a)(O,2),y=g[0],N=g[1],C=Object(c.useState)(!1),k=Object(r.a)(C,2),E=k[0],S=k[1],B=Object(c.useState)(""),R=Object(r.a)(B,2),T=R[0],I=R[1];Object(c.useEffect)((function(){document.getElementsByClassName("listitem").length>0&&document.getElementsByClassName("listitem")[document.getElementsByClassName("listitem").length-1].scrollIntoView()}),[d]);var M=Object(c.useMemo)((function(){return e.subscriptions.create({channel:"ChatChannel"},{connected:function(){},received:function(e){"chat"===e.action&&(j((function(t){return[].concat(Object(p.a)(t),[e])})),"true"===e.winner&&(I(e.username),document.getElementById("winner").style.visibility="visible")),"draw"===e.action&&(document.getElementById("cell-".concat(e.cell)).style.backgroundColor="white")},create:function(e,t){this.perform("create",{content:e,username:t})},draw:function(e){this.perform("draw",{cell:e})},answer:function(e){this.perform("answer",{answer:e})}})}),[]),_=function(e){e.preventDefault(),a&&y&&(M.create(a,b),s(""))},D=function(e){return Array.from({length:2e3},(function(e,t){return t+1})).map((function(t){return Object(l.jsx)("div",{id:"cell-".concat(2e3*(e-1)+t),className:"grid-item ".concat(2e3*(e-1)+t),onMouseEnter:function(e){return function(e){!0===E&&(e.target.style.backgroundColor="white",M.draw(e.target.id.split("-")[1]))}(e)},onClick:function(e){return function(e){e.target.style.backgroundColor="white",M.draw(e.target.id.split("-")[1])}(e)}},t)}))},L=function(){S(!E)};return Object(l.jsxs)("div",{className:"play",children:[Object(l.jsx)("div",{className:"left-column",children:Object(l.jsxs)("div",{className:"stage",children:[Object(l.jsx)("h1",{children:"Chat - Hi!"}),Object(l.jsx)("input",{value:b,onChange:function(e){m(e.target.value)},type:"text",placeholder:"Enter Your Username",className:"username-input",id:"username-input"}),Object(l.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),N(!0),document.getElementById("username-input").disabled=!0}(e)},className:"sign-in",children:"Sign-In"}),Object(l.jsx)("div",{className:"chat-logs",children:Object(l.jsx)("ul",{className:"chat-list",children:d.map((function(e){return Object(l.jsxs)("li",{className:"listitem",children:[Object(l.jsxs)("p",{className:"chat-message",children:[e.username," : ",e.content]}),Object(l.jsx)("span",{className:"chat-created-at",children:e.created_at})]},"chat_".concat(e.id))}))})}),Object(l.jsx)("input",{value:a,onKeyPress:function(e){var t;"Enter"===(t=e).key&&_(t)},onChange:function(e){s(e.target.value)},type:"text",placeholder:"Enter your message...",className:"chat-input"}),Object(l.jsx)("button",{onClick:function(e){return _(e)},className:"send",children:"Send"})]})}),Object(l.jsxs)("div",{className:"right-column",style:{backgroundColor:"rgb(250, 0, 0)"},children:[Object(l.jsx)("h3",{children:"Draw Here"}),Object(l.jsx)("button",{onClick:function(e){return function(){var e,t=document.getElementsByClassName("grid-item"),n=Object(x.a)(t);try{for(n.s();!(e=n.n()).done;)e.value.style={backgroundColor:"rgb(68, 68, 68)"}}catch(c){n.e(c)}finally{n.f()}}()},className:"clear",children:"Clear Canvas"}),Object(l.jsxs)("div",{className:"grid-container",onMouseDown:function(e){return L()},onMouseUp:function(e){return L()},children:[D(1),D(2),D(3),D(4),D(5)]})]}),Object(l.jsxs)("div",{className:"clear",children:[Object(l.jsx)(v,{username:b,chatChannel:M,isUsernameConfirmed:y}),Object(l.jsx)(w,{winner:T})]})]})};var N=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)(m.a,{basename:"/",children:Object(l.jsx)("div",{className:"App",children:n?(a(!1),Object(l.jsx)("div",{children:"Loading"})):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{className:"Navbar",children:[Object(l.jsx)("li",{className:"Nav-Item",children:Object(l.jsx)(m.b,{to:"/",children:"About"})}),Object(l.jsx)("li",{className:"Nav-Item",children:Object(l.jsx)(m.b,{to:"/play",children:"Chat-N-Draw"})})]})}),Object(l.jsx)(o,{}),Object(l.jsx)(O.a,{exact:!0,path:"/",children:Object(l.jsx)(b,{})}),Object(l.jsx)(O.a,{exact:!0,path:"/play",children:Object(l.jsx)(y,{})})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.9f4c4f62.chunk.js.map