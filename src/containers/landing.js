import John from '../assets/20200715_112939.jpg'
import logo from '../logo.svg'

const Team = () => {
    return(
    <div className= "Team">
        <div className="Bio">
            <h1><strong>John Ratana</strong></h1>
            <img src={John} alt="That's ME!" height="200px"/>
            <div>Full-Stack Software Engineer</div>
            <p>Ruby, Rails, Javascript, React</p>
            <p id="bio">John keeps himself busy with rock climbing, coding, cooking, and raising two children (the 4C's).  Based out of Philadelphia, he is always
                looking for new opportunities to learn, grow, and work.  You can find him <a href="https://www.linkedin.com/in/john-ratana-7aa24063/">here (linkedIn)</a>.
                Check out his work <a href="https://www.linkedin.com/in/john-ratana-7aa24063/">here (Github)</a>
            </p>
        </div>
            <h1>Techs</h1>
            <div className= "Techs">
                <div className= "Techbox">
                    <img src={logo} alt="That's ME!" height="200px" width= "200px"/>
                    <p>React</p>
                </div>
                <div className= "Techbox">
                    <img src='https://camo.githubusercontent.com/973c99d17e4ce72d08c4433449045d8391948711f11ac5f328a585e2a7bc8663/68747470733a2f2f692e696d6775722e636f6d2f515a6f776e68672e706e67' alt="That's ME!" height="200px" width= "200px"/>
                    <p>React-Spring</p>
                </div>    
                <div className= "Techbox">
                    <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--rIjbQB7r--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/3943/af485a9e-2bd8-4dbd-97d0-b998e5adcc0c.png' alt="That's ME!" height="200px" width= "200px"/>
                    <p>StepZen</p>
                </div>
            </div>

    
        <div className="Shoutout">
            <h2>Shoutout to <a href="https://mintbean.io/">Mintbean.io</a> for organizing Learn-A-Thons to inspire new developers!</h2>
        </div>
    </div>
    )
}

const About = () => {
    return (
        <div className = "About">
            <p>
                MLB Showdown is a collectible trading card game.  Card stats are linked directly to the real life perfomance of the
                ahtletes.  Collect them all, form your custom roster, and play against other people.  You players will get better (or worse)
                as the season progresses. Trade with other players and make your best team.
            </p>
            <p>
                Click on "Cards" in the navigation bar to explore the full library of cards.
            </p>
            <p>
                Click on "Roster" to buy card packs and make your team.
            </p>
        </div>
    )
}

const Landing = () => {
    return(   
      <div className= "Landing"> 
            <About/>
            <Team/>
      </div>

    )
  }
  
  export default Landing