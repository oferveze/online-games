import React from 'react'

function Home(props) {
    return (
        <div>
            Welcome! <br />
            {props.session.isLoggedIn ? "Great to See you, Start Playing!" : "Wanna play? Please Login or Register!"}
        </div>
    )
}

export default Home;
