import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToTarget = this.scrollToTarget.bind(this);
        this.homeClicked = this.homeClicked.bind(this);
    }

    homeClicked(e) {
        let offsetPosition = 0;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    scrollToTarget(e){
        console.log(this.props, e.target.innerText);
        let text = e.target.innerText;
        var elem = document.getElementById('body');
        var add = 0;
        switch(text) {
            case 'ABOUT':
                console.log('about')
                add = 0;
                elem = this.props.about.divElement;
                break;
            case 'EXPERIENCE':
                console.log('exp')
                add = 0;
                elem = this.props.experience.divElement;
                break;
            case 'PROJECTS':
                add = 140;
                elem = this.props.project.divElement;
                break;
        }

        var elementPosition = elem.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.scrollY + add;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }


    render() {
        return (
            <div className="Nav">
                <p className="Nav-Icon" onClick={this.homeClicked}>WBL</p>
                <ul className="Nav-Options">
                    <li><a className="Nav-Link" onClick={this.scrollToTarget}>ABOUT</a></li>
                    <li><a className="Nav-Link" onClick={this.scrollToTarget}>EXPERIENCE</a></li>
                    <li><a className="Nav-Link" onClick={this.scrollToTarget}>PROJECTS</a></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;