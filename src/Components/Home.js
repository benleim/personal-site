import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="Home-Container">
                <p className="Home-Intro">Hello, my name is</p>
                <h1 className="Home-Name">Ben Leimberger.</h1>
                <h1 className="Home-Desc">I'm a developer & designer.</h1>
                <p className="Home-Subtext">
                    By day, I'm a student at the University of Pennsylvania <br/> studying Computer Science and
                    Economics.
                </p>
                <a className="Home-ContactBtn" href="mailto:wbleimberger@gmail.com">Contact Me</a>
            </div>
        );
    }
}

export default Home;