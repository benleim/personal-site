import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <div className="Nav">
                <p className="Nav-Icon">WBL</p>
                <ul className="Nav-Options">
                    <li><a className="Nav-Link" href="">ABOUT</a></li>
                    <li><a className="Nav-Link" href="">EXPERIENCE</a></li>
                    <li><a className="Nav-Link" href="">PROJECTS</a></li>
                    <li><a className="Nav-Link" href="">CONTACT</a></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;