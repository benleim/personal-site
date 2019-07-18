import React from 'react';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.css';

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

                <p className="Home-Email">wbleimberger@gmail.com</p>
                <div className="Home-EmailLine"></div>

                <ul className="Home-MediaList">
                    <li>
                        <a className="Home-MediaIcon fab fa-linkedin" href="https://www.linkedin.com/in/ben-l-ab5230126/"></a>
                    </li>
                    <li>
                        <a className="Home-MediaIcon fab fa-github" href="https://github.com/benleim"></a>
                    </li>
                    <li>
                        <a className="Home-MediaIcon fab fa-quora" href=""></a>
                    </li>
                </ul>
                <div className="Home-MediaLine"></div>
            </div>
        );
    }
}

export default Home;