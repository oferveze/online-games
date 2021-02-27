import React from 'react'

function Home(props) {
    return (
        <div>
            Welcome!
            {props.session.isLoggedIn ? "Great to See you, Start Playing!" : "Wanna play? Please Login or Register!"}
        </div>
    )
}

export default Home;
